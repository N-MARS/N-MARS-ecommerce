const User = require("../models/user");

const loginRouter = require("expresss").Router();

loginRouter.post("/", async (req, res) => {
  const body = req.body;

  const user = await User.findOne({ email: body.email });

  return user;
});
