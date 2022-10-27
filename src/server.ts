import "reflect-metadata"
import express from "express";
import { router } from "./routes";
import "./shared/container/index";

const server = express();

server.use(express.json());

server.use(router);

server.listen(3333, () => {
    console.log('Server is running!');
});