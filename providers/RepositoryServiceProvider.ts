import type { ApplicationContract } from '@ioc:Adonis/Core/Application'

export default class RepositoryServiceProvider {
  constructor(protected app: ApplicationContract) {}
  /**
   * @description Register your own bindings
   */
  public register() {
    // Register your own bindings
  }
  /**
   * @description Setup bindings on boot
   */
  public async boot() {
    // IoC container is ready
  }
  /**
   * @description Perform some final actions, since app is ready
   */
  public async ready() {
    // App is ready
    this.setupUserBindings()
  }
  /**
   * @description Cleanup, since app is going down
   */
  public async shutdown() {
    // Cleanup, since app is going down
  }
  /**
   * @description Setup bindings for the user repository and service
   * @private
   */
  private async setupUserBindings() {
    const { default: UserRepository } = await import('App/Repositories/UserRepository')
    const { default: UserService } = await import('App/Services/UserService')
    this.app.container.singleton(
      'App/Interfaces/UserRepositoryInterface',
      () => new UserRepository()
    )
    this.app.container.singleton('App/Services/UserService', () => {
      const repo = this.app.container.use('App/Interfaces/UserRepositoryInterface')
      return new UserService(repo)
    })
  }
}
