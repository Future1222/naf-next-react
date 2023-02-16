import { IUser } from '@/modules/models/user.model'
import { BaseRepository } from '@/shared/database/base.repository'

export default class UserServices extends BaseRepository<IUser> {
  findById(id: string): Promise<IUser> {
    return this.findById(id)
  }
  findAll(): Promise<IUser[]> {
    return this.findAll()
  }
  create(item: IUser): Promise<boolean> {
    return this.create(item)
  }
  update(id: string, item: IUser): Promise<boolean> {
    return this.update(id, item)
  }
  delete(id: string): Promise<boolean> {
    return this.delete(id)
  }
}
