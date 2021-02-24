import express from 'express';
import 'reflect-metadata';
import "./database/index.ts";
import { router } from './router';

const app = express();

app.use(express.json());

app.use(router);

app.listen(4432, () => console.log("Server is running!"));