"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Env_1 = __importDefault(require("@ioc:Adonis/Core/Env"));
const databaseConfig = {
    connection: Env_1.default.get('DB_CONNECTION'),
    connections: {
        mysql: {
            client: 'mysql',
            connection: {
                host: Env_1.default.get('MYSQL_HOST', 'localhost'),
                port: Env_1.default.get('MYSQL_PORT', '3306'),
                user: Env_1.default.get('MYSQL_USER', 'root'),
                password: Env_1.default.get('MYSQL_PASSWORD', ''),
                database: Env_1.default.get('MYSQL_DB_NAME', 'rem2023'),
            },
        },
    },
};
exports.default = databaseConfig;
//# sourceMappingURL=database.js.map