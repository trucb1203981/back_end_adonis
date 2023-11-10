import User from 'App/Models/User'

export default interface UserRepositoryInterface {
  create(params: object): Promise<User>
  createMany(params: object[]): Promise<User[]>
  destroy(userId: number): Promise<boolean>
  filter(request: object)
  findAll(): Promise<User[]>
  findByEmail(email: string): Promise<User | null>
  findById(userId: number): Promise<User | null>
  update(user: User, $data: object): Promise<User | null>
}
