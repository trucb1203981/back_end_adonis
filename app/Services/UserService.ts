import UserRepositoryInterface from '../interfaces/UserRepositoryInterface'

class UserService {
  
  /**
   * @description Inject the user repository
   * @param userRepository
   */
  constructor(private userRepository: UserRepositoryInterface) {
    this.userRepository = userRepository
  }

  /**
   * @description Register a new user
   * @param {object} params
   * @return {Promise<User | null>}
   */
  public async register(params: object) {
    const user = await this.userRepository.create(params)
    if (!user) {
      return null
    }
    return user
  }

  /**
   * @description Login a user
   * @param email
   * @param password
   * @param auth
   * @returns {Promise<User | null>}
   */
  public async login({ email, password }: { email: string; password: string }, auth) {
    const user = await this.userRepository.findByEmail(email)
    let token = null
    if (!user) {
      return null
    }
    try {
      token = await auth.use('api').attempt(email, password)
    } catch {
      return null
    }
    return token
  }

  /**
   * @description Get the authenticated user
   * @param auth 
   * @returns 
   */
  public async getAuthUser(auth) {
    return await auth.use('api').user!
  }

  /**
   * @description Logout a user
   * @param auth
   * @returns {Promise<boolean>}
   */
  public async logout(auth): Promise<boolean> {
    await auth.use('api').revoke()
    return true
  }
}

export default UserService
