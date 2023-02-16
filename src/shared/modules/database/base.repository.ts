/* eslint-disable no-unused-vars */
import { IWrite, IRead } from '@/shared/models/common.model'
export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {
  public readonly _collection: any
  constructor(fireDb: any, collectionName: string) {
    this._collection = fireDb.collection(collectionName)
  }
  create(item: T): Promise<boolean> {
    throw new Error('Method not implemented.')
  }
  update(id: string, item: T): Promise<boolean> {
    throw new Error('Method not implemented.')
  }
  delete(id: string): Promise<boolean> {
    throw new Error('Method not implemented.')
  }
  find(item: T): Promise<T[]> {
    throw new Error('Method not implemented.')
  }
  findOne(id: string): Promise<T> {
    throw new Error('Method not implemented.')
  }
}
