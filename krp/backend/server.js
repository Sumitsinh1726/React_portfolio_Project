const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "salesgrow",
});

// User Registration
app.post("/register", (req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const username = req.body.username;
  const mobile = req.body.mobile;
  const city = req.body.city;
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "INSERT INTO signup (firstname, lastname, username, mobile, city, email, password) VALUES (?, ?, ?, ? ,? ,?, ?)",
    [firstname, lastname, username, mobile, city, email, password],
    (err, result) => {
      if (result) {
        res.send(result);
      } else {
        res.send({ message: "Enter Correct asked details" });
        console.log(err);
      }
    }
  );
});

// User Login
app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "SELECT * FROM signup WHERE email = ? AND password = ?",
    [email, password],
    (err, result) => {
      if (err) {
        throw err;
      } else {
        if (result.length > 0) {
          res.send(result);
        } else {
          res.send({ message: "Wrong Username or Password!" });
        }
      }
    }
  );
});

// Get a User
app.get("/users", (req, res) => {
  db.query("SELECT * FROM signup", (err, result) => {
    if (err) {
      throw err;
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("running backend server");
});
