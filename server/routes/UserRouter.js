const express = require("express");
const userRouter = express.Router();
const Users = require("../models/UserModel.js");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const token = require("../jwt");

const validation = [
  check("username")
    .notEmpty()
    .withMessage("ПУСТОЙ!!!!!")
    .isLength({
      min: 2,
      max: 20,
    })
    .withMessage("Коротко"),
  check("surname")
    .notEmpty()
    .withMessage("ПУСТОЙ!!!!!")
    .isLength({
      min: 2,
      max: 20,
    })
    .withMessage("Коротко"),
  check("patronymic")
    .notEmpty()
    .withMessage("ПУСТОЙ!!!!!")
    .isLength({
      min: 2,
      max: 20,
    })
    .withMessage("Коротко"),
  check("password")
    .notEmpty()
    .withMessage("ПУСТОЙ!!!!!")
    .isLength({
      min: 5,
      max: 20,
    })
    .withMessage("Коротко"),
  check("email")
    .notEmpty()
    .withMessage("ПУСТОЙ!!!!!")
    .isEmail()
    .withMessage("Коротко"),
  check("phone").notEmpty().withMessage("ПУСТОЙ!!!!!"),
];
userRouter.post("/api/register", validation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    return res.status(400).json({ error: errors });
  }
  const { username, surname, patronymic, email, phone, password } = req.body;
  bcrypt.hash(password, 10).then(async (hash) => {
    var user = new Users.User({
      username: username,
      surname: surname,
      patronymic: patronymic,
      email: email,
      phone: phone,
      password: hash,
      role: "user",
    });
    await user
      .save()
      .then(() => {
        res.json({ isRegister: true });
      })
      .catch((err) => {
        if (err) {
          res.status(400).json({ error: err });
        }
      });
  });
});

userRouter.post("/api/login", validation, async (req, res) => {
  const { userlog, password } = req.body;
  var user = await Users.User.findOne({
    $or: [{ email: userlog }, { phone: userlog }],
  });

  if (user) {
    const hashPassword = user.password;
    bcrypt.compare(password, hashPassword).then(async (match) => {
      if (!match) {
        return res.status(400).json({ error: "Incorrect password!" });
      } else {
        const accessToken = token.createToken(user);
        res.cookie("access-token", accessToken, {
          maxAge: 60 * 60 * 24 * 30 * 1000,
        });
        return res.json({ isLogin: true, role: user.role });
      }
    });
  } else {
    return res.status(400).json({ error: "User doesn't exist" });
  }
});

userRouter.get("/api/profile", token.validateToken, (req, res) => {
  res.json({ isLogin: true });
});

userRouter.get("/api/logout", token.validateToken, (req, res) => {
  const accessToken = req.cookies["access-token"];
  res.cookie("access-token", accessToken, {
    maxAge: 0,
  });
  res.json("Success");
});

module.exports = userRouter;
