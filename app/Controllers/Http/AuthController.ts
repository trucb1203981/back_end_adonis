import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserService from 'App/Services/UserService'
import RegisterValidator from 'App/Validators/RegisterValidator'
import LoginValidator from 'App/Validators/LoginValidator'
import { inject } from '@adonisjs/fold'

@inject([UserService])
export default class AuthController {
  /**
   * Inject the user service
   * @param userService
   */
  constructor(public userService: UserService) {}
  
  /**
   * @description Register a new user
   * @param request
   * @param response
   * @return response
   */
  public async register({ request, response }: HttpContextContract) {
    await request.validate(RegisterValidator)
    const params = request.only(['name', 'email', 'password'])
    const user = await this.userService.register(params)
    if (!user) {
      return response.unprocessableEntity('Unable to register user')
    }
    return response.created(user)
  }

  /**
   * @description Login a user
   * @param request
   * @param response
   * @param auth
   * @return response
   */
  public async login({ request, response, auth }: HttpContextContract) {
    await request.validate(LoginValidator)
    const { email, password } = request.only(['email', 'password'])
    const token = await this.userService.login({ email, password }, auth)
    if (!token) {
      return response.unprocessableEntity('Invalid credentials')
    }
    return response.ok(token)
  }

  /**
   * @description Get the authenticated user
   * @param param0 
   * @returns 
   */
  public async getAuthUser({ response, auth }: HttpContextContract) {
    const user = await this.userService.getAuthUser(auth)
    if (!user) {
      return response.unprocessableEntity('Unable to get user')
    }
    return response.ok(user)
  }

  /**
   * @description Logout a user
   * @param response
   * @param auth
   * @return response
   */
  public async logout({ response, auth }: HttpContextContract) {
    await this.userService.logout(auth)
    return response.ok({ message: 'Logout successful' })
  }
}
