import { cleanEnv, port, str } from "envalid";
import dotenv from 'dotenv'

dotenv.config();

export default cleanEnv(process.env, {
    PORT: port(),
    NODE_ENV: str(),
    MONGO_URI: str(),
})