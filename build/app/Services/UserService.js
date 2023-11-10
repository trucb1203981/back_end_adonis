"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
        this.userRepository = new UserRepositoryInterface();
    }
    async register(params) {
        const user = await this.userRepository.create(params);
        if (!user) {
            return false;
        }
        return user;
    }
    async login({ email, password }, auth) {
        const user = await this.userRepository.findByEmail(email);
        let token = null;
        if (!user) {
            return null;
        }
        try {
            token = await auth.use('api').attempt(email, password, {
                expiresIn: '7 days',
            });
        }
        catch {
            return null;
        }
        return token;
    }
}
exports.default = UserService;
//# sourceMappingURL=UserService.js.map