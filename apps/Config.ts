import * as dotenv from "dotenv";

const result = dotenv.config() // Loads preset environment variables from .env file.

const DEV_ENV = process.env.NODE_ENV || 'development';

export const Config = require(`../config/${DEV_ENV}.json`);