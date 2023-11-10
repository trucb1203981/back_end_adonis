"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("App/Models/User"));
class UserRepository {
    async create(params) {
        const user = await User_1.default.create(params);
        return user;
    }
    async createMany(params) {
        const users = await User_1.default.createMany(params);
        return users;
    }
    async destroy(userId) {
        await User_1.default.query().where('user_id', userId).delete();
        return true;
    }
    async filter(request) {
        const page = request['page'] || 1;
        const limit = request['limit'] || 20;
        const users = await User_1.default.query().where(request).paginate(page, limit);
        return users;
    }
    async findAll() {
        const users = await User_1.default.all();
        return users;
    }
    async findByEmail(email) {
        const user = await User_1.default.findBy('email', email);
        return user;
    }
    async findById(userId) {
        const user = await User_1.default.find(userId);
        return user;
    }
    async update(user, $data) {
        user.merge($data);
        await user.save();
        return user;
    }
}
exports.default = UserRepository;
//# sourceMappingURL=UserRepository.js.map