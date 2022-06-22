const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const RegisterModel = require("./Register_s")
app.use(express.json());
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

  res.json(User);
});

app.listen(3001, () => {
  console.log("SERVER RUNS PERFECTLY!");
});