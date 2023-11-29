"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseConfig = void 0;
const path_1 = require("path");
const Dotenv = require("dotenv");
Dotenv.config();
exports.databaseConfig = {
    type: "postgres",
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    entities: [(0, path_1.join)(__dirname, "../entities/**/*.entity{.ts,.js}")],
    synchronize: true,
    autoLoadEntities: true,
    logging: true,
    ssl: false,
};
//# sourceMappingURL=database.config.js.map