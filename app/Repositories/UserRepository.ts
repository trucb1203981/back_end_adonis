import UserRepositoryInterface from 'App/Interfaces/UserRepositoryInterface'
import User from 'App/Models/User'
class UserRepository implements UserRepositoryInterface {
  /**
   * Create a new user
   * @param {object} params
   * @return {Promise<User>}
   */
  async create(params: object): Promise<User> {
    const user = await User.create(params)
    return user
  }
  /**
   * Create many new users
   * @param {object[]} params
   * @return {Promise<User[]>}
   */
  async createMany(params: object[]): Promise<User[]> {
    const users = await User.createMany(params)
    return users
  }
  /**
   * Delete a user
   * @param {number} userId
   * @return {Promise<boolean>}
   */
  async destroy(userId: number): Promise<boolean> {
    await User.query().where('user_id', userId).delete()
    return true
  }
  /**
   * Filter users
   * @param {object} request
   * @return {Promise<User[]>}
   */
  async filter(request: object) {
    const page = request['page'] || 1
    const limit = request['limit'] || 20
    const users = await User.query().where(request).paginate(page, limit)
    return users
  }
  /**
   * Find all users
   * @return {Promise<User[]>}
   */
  async findAll(): Promise<User[]> {
    const users = await User.all()
    return users
  }
  /**
   * Find a user by email
   * @param {string} email
   * @return {Promise<User | null>}
   */
  async findByEmail(email: string): Promise<User | null> {
    const user = await User.findBy('email', email)
    return user
  }
  /**
   * Find a user by id
   * @param {number} userId
   * @return {Promise<User | null>}
   */
  async findById(userId: number): Promise<User | null> {
    const user = await User.find(userId)
    return user
  }
  /**
   * Update a user
   * @param {User} user
   * @param {object} $data
   * @return {Promise<User | null>}
   */
  async update(user: User, $data: object): Promise<User | null> {
    user.merge($data)
    await user.save()
    return user
  }
}

export default UserRepository
