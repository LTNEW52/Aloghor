import { Router } from "express";
import signup from "../Controllers/userAuthentication/signup.controller.js";

const userAuthRoute = Router();

userAuthRoute.post("/login", (req, res) => {
  res.send({ title: "IN LOGIN PAGE!" });
});

userAuthRoute.post("/signup", signup);

export default userAuthRoute;
