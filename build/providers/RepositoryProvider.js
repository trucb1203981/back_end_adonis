"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { ServiceProvider } = require('@adonisjs/fold');
const UserRepository_1 = __importDefault(require("App/Repositories/UserRepository"));
class RepositoryServiceProvider {
    constructor(app) {
        this.app = app;
    }
    register() {
        this.app.container.singleton('App/Interfaces/UserRepositoryInterface', () => {
            return new UserRepository_1.default();
        });
    }
    async boot() {
    }
    async ready() {
    }
    async shutdown() {
    }
}
exports.default = RepositoryServiceProvider;
//# sourceMappingURL=RepositoryProvider.js.map