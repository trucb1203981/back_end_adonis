"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = require("@ioc:Adonis/Core/Validator");
class LoginValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            email: Validator_1.schema.string({}, [Validator_1.rules.required(), Validator_1.rules.email()]),
            password: Validator_1.schema.string({}, [Validator_1.rules.required()]),
        });
        this.messages = {
            'email.required': 'Email is required to login',
            'email.email': 'Email is not valid',
            'password.required': 'Password is required to login',
        };
    }
}
exports.default = LoginValidator;
//# sourceMappingURL=LoginValidator.js.map