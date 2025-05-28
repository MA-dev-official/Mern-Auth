import express  from "express";
import cors from "cors";
import  user from './models/user.model.js';

const app = express();

app.use(cors());
app.use(express.json());



export default app
