"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(require("@ioc:Adonis/Core/Route"));
Route_1.default.group(() => {
    Route_1.default.get('/', async () => {
        return { hello: 'world' };
    });
    Route_1.default.post('register', 'AuthController.register');
    Route_1.default.post('login', 'AuthController.login');
}).prefix('api');
//# sourceMappingURL=routes.js.map