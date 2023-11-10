"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = require("@ioc:Adonis/Core/Validator");
class CreateUserValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            name: Validator_1.schema.string([Validator_1.rules.required()]),
            email: Validator_1.schema.string([Validator_1.rules.required(), Validator_1.rules.email(), Validator_1.rules.unique({ table: 'users', column: 'email' })
            ]),
            password: Validator_1.schema.string([Validator_1.rules.required(), Validator_1.rules.confirmed('password_confirmation'), Validator_1.rules.minLength(8)]),
        });
        this.messages = {
            'name.required': 'Name is required to create a new user',
            'email.required': 'Email is required to create a new user',
            'email.email': 'Email is not valid',
            'email.unique': 'Email is already in use',
            'password.required': 'Password is required to create a new user',
            'password.confirmed': 'Password confirmation does not match',
            'password.minLength': 'Password must be at least 8 characters',
        };
    }
}
exports.default = CreateUserValidator;
//# sourceMappingURL=RegisterValidator.js.map