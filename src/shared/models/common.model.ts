/* eslint-disable no-unused-vars */
import firebase from 'firebase'
export interface IQueryWhereClause {
  field: string
  condition: firebase.firestore.WhereFilterOp
  value: any
}
export interface IWrite<T> {
  create(item: T): Promise<boolean>
  update(id: string, item: T): Promise<boolean>
  delete(id: string): Promise<boolean>
}

export interface IRead<T> {
  findByIds(ids: Array<string>): Promise<T[]>
  findById(id: string): Promise<T>
  findAll(): Promise<T[]>
  findByQuery(queries: IQueryWhereClause[]): Promise<T[]>
}
