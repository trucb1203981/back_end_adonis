import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateUserValidator {
  constructor(protected ctx: HttpContextContract) {}
  /**
   * Defining a schema to validate the user input
   * https://adonisjs.com/docs/4.1/validator#_schema
   * https://adonisjs.com/docs/4.1/validator#_available_rules
   */
  public schema = schema.create({
    name: schema.string([rules.required()]),
    email: schema.string([rules.required(), rules.email(), rules.unique({ table: 'users', column: 'email' })
    ]),
    password: schema.string([rules.required(), rules.confirmed('password_confirmation'), rules.minLength(8)]),
  })
  /**
   * Custom messages for validation failures can be defined here.
   * https://adonisjs.com/docs/4.1/validator#_custom_messages
   */
  public messages: CustomMessages = {
    'name.required': 'Name is required to create a new user',
    'email.required': 'Email is required to create a new user',
    'email.email': 'Email is not valid',
    'email.unique': 'Email is already in use',
    'password.required': 'Password is required to create a new user',
    'password.confirmed': 'Password confirmation does not match',
    'password.minLength': 'Password must be at least 8 characters',
  }
}
