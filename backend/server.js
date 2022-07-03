const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const RegisterModel = require("./Register_s")
app.use(express.json());
const jwt= require('jsonwebtoken')
app.use(cors());
mongoose.connect(
  "mongodb+srv://likhita4403:likhita@backend.z3kqc.mongodb.net/?retryWrites=true&w=majority"
);

app.get("/getUsers", (req, res) => {
  RegisterModel.find({}, (err, result) => {
      if (err) {
          res.json(err);
      } else {
          res.json(result);
      }
  });
});

app.post("/writeUsers", async(req, res) => {
  const User = req.body;
  const newUser = new RegisterModel(User);
  await newUser.save();
  return res.json({ status: 'ok' })
});
app.post('/Login', async(req, res) => {
  console.log("hjfghj")
  console.log(req.body)
  const user = await RegisterModel.findOne({
      email: req.body.email,
  })

  if (!user) {
      return { status: 'error', error: 'Invalid login' }
  }

  const isPasswordValid = req.body.password === user.password
      // bcrypt.compare(
      //     req.body.password,
      //     user.password
      // )
  console.log(isPasswordValid)
  if (isPasswordValid) {
      // res.send("ok")
      console.log("ok")
      const token = jwt.sign({
              name: user.name,
              email: user.email,
          },
          'secret123'
      )
      console.log(token)

      return res.json({ status: 'ok', user: token })
  } else {
      return res.json({ status: 'error', user: false })
  }
})
app.listen(3001, () => {
  console.log("SERVER RUNS PERFECTLY!");
});