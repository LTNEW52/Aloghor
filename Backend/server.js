import express from "express";
import { PORT } from "./Config/env.js";
import connectToDB from "./Database/mongodb.js";
import userAuthRoute from "./Routes/userAuth.route.js";
import errorHandler from "./Middleware/errorHandler.js";

const server = express();

server.use(express.json());

server.use("/api/userAuthentication", userAuthRoute);

server.use(errorHandler);

server.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  await connectToDB();
});

// The brain of the backend, Express server setup. Server.listen establish the connection. server.use uses route path, uses json file format etc.

// As connectToDB returns a promise, we need to await it, making the .listen arrow function async
