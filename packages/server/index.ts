import express from "express";
import http from "http";
import morgan from "morgan";
import cors from "cors";
import { Server } from "socket.io";

import { router } from "./router";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: /localhost:\d+$/,
    methods: ["GET", "POST"],
  },
});

app.set("io", io);
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use("/", router);

server.listen(8080, () => {
  console.log("listening on *:8080");
});
