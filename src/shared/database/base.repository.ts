/* eslint-disable no-unused-vars */
import firebase from 'firebase'
import { IWrite, IRead, IQueryWhereClause } from '@/shared/models/common.model'
import { fireDb } from '@/shared/firebase/firebase.config'
export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {
  public readonly _collection: firebase.firestore.CollectionReference
  constructor(collectionName: string) {
    this._collection = fireDb.collection(collectionName)
  }
  create(item: T): Promise<boolean> {
    return this._collection
      .doc()
      .set({
        deleted_at: '',
        ...item,
      })
      .then(() => {
        return true
      })
      .catch(() => {
        return false
      })
  }
  update(id: string, item: T): Promise<boolean> {
    return this._collection
      .doc(id)
      .update({ ...item, updated_at: new Date() })
      .then(() => {
        return true
      })
      .catch(() => {
        return false
      })
  }
  async delete(id: string): Promise<boolean> {
    const item = await this.findById(id)
    return this._collection
      .doc(id)
      .set({
        ...item,
        deleted_at: new Date(),
      })
      .then(() => {
        return true
      })
      .catch(() => {
        return false
      })
  }
  async findByIds(ids: Array<String>): Promise<T[]> {
    const data = await this._collection.where('id', 'in', ids).get()
    const results = await Promise.all(
      data.docs.map(async (doc: firebase.firestore.DocumentData) => {
        const data = doc.data() as T
        return { id: doc.id, ...data }
      })
    )
    return results
  }
  async findById(id: string): Promise<T> {
    const snapshot = await this._collection.doc(id).get()
    if (!snapshot.exists) return {} as T
    return { id: snapshot.id, ...snapshot.data() } as T
  }
  async findAll(): Promise<T[]> {
    const data = await this._collection.where('deleted', '==', '').get()
    const results = await Promise.all(
      data.docs.map(async (doc: firebase.firestore.DocumentData) => {
        const data = doc.data() as T
        return { id: doc.id, ...data }
      })
    )
    return results
  }
  async findByQuery(queries: IQueryWhereClause[]): Promise<T[]> {
    let collectionRef: firebase.firestore.Query<firebase.firestore.DocumentData> = this._collection
    if (queries && queries.length) {
      for (const query of queries) {
        collectionRef = collectionRef.where(query.field, query.condition, query.value)
      }
    }
    const data = await collectionRef.get()
    if (data.empty) return []
    const results = await Promise.all(
      data.docs.map(async (doc: firebase.firestore.DocumentData) => {
        const data = doc.data() as T
        return { id: doc.id, ...data }
      })
    )
    return results
  }
}
