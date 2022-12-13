const signUpRouter = require("express").Router();
const User = require("../models/user");

signUpRouter.post("/", async (req, res) => {
  const { email, password, coniformPassword } = req.body;

  return email, password, coniformPassword;
});
