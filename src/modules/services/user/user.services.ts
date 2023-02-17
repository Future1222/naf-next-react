import DatastoreKind from '@/shared/constants/datastore-kind.enum'
import UserRepository from '@/modules/repositories/user/user.repository'

export class UserServices {
  private userRepository: UserRepository

  constructor() {
    this.userRepository = new UserRepository(DatastoreKind.USERS)
  }

  findById(id: string) {
    return this.userRepository.findById(id)
  }

  findAll() {
    return this.userRepository.findAll()
  }
}
