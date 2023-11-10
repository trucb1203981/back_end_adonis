"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserService_1 = __importDefault(require("App/Services/UserService"));
const RegisterValidator_1 = __importDefault(require("App/Validators/RegisterValidator"));
const LoginValidator_1 = __importDefault(require("App/Validators/LoginValidator"));
class AuthController {
    constructor(userService) {
        this.userService = userService;
        this.userService = new UserService_1.default();
    }
    async register({ request, response }) {
        await request.validate(RegisterValidator_1.default);
        const params = request.only(['name', 'email', 'password']);
        const user = await this.userService.register(params);
        if (!user) {
            return response.unprocessableEntity('Unable to register user');
        }
        return response.created(user);
    }
    async login({ request, response, auth }) {
        await request.validate(LoginValidator_1.default);
        const { email, password } = request.only(['email', 'password']);
        const token = await this.userService.login({ email, password }, auth);
        if (!token) {
            return response.unprocessableEntity('Invalid credentials');
        }
        return response.ok(token);
    }
}
exports.default = AuthController;
//# sourceMappingURL=AuthController.js.map