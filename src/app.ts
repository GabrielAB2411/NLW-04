import express from 'express';
import 'reflect-metadata';
import "./database/index.ts";
import { router } from './router';
import createConnection from "./database"

createConnection();
const app = express();

app.use(express.json());

app.use(router);

export{app}
