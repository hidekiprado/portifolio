const express = require("express");
const fs = require("fs");

//email sender
const sendEmail = require("./emailSender");
//app
const app = express();
//data_base
const db = require("../data_base/db");
//port
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.static("./client/build"));

app.get("/api/test", (req, res) => res.json({ result: "ok" }));

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;
  console.log(req.body);
  try {
    const sql = `INSERT INTO messages (name, email, message) VALUES($1, $2, $3)`;
    const dbRes = await db.query(sql, [name, email, message]);
    res.json({ message: "email sent" });
    sendEmail(name, email, message);
  } catch (err) {
    res.status(500).json({});
  }
});

//system to access from 3000 port frontEnd
app.get("*", (req, res) => {
  res.setHeader("content-type", "text/html");
  fs.createReadStream(`${__dirname}/client/build/index.html`).pipe(res);
});

app.listen(port, () => console.log(`Listening at localhost:${port}`));

//--------------------------signup working but not sure if I will use it-----------------

//first signup
// const firstUser = require("./firstUser");
//util for hashing password
// const { generateHash, isValidPassword } = require("../util/hash");
//session
// const { expressSession, pgSession } = require("../session");
// ---------------------------------------------------------------------
// app.use(
//   expressSession({
//     store: new pgSession({
//       pool: db, // Connects to our postgres db
//       createTableIfMissing: true, // Creates a session table in your database (go look at it!)
//     }),
//     secret: process.env.EXPRESS_SESSION_SECRET_KEY,
//     resave: true,
//     saveUninitialized: true,
//   })
// );
// // User signup
// app.post("/api/signup", async (req, res) => {
//   const { email, password } = firstUser;
//   const hashedPassword = generateHash(password);

//   try {
//     let dbRes = await db.query("SELECT FROM users WHERE email=$1", [email]);
//     if (dbRes.rows.length === 1) {
//       res.status(400).json({ message: "sorry user already exists" });
//     } else {
//       try {
//         const sql = `INSERT INTO users(email, password) VALUES($1, $2)`;
//         db.query(sql, [email, hashedPassword]);
//         res.json({ message: "signup successfully" });
//         req.session.email = email;
//       } catch {
//         res.status(500).json({});
//       }
//     }
//   } catch {
//     res.status(500).json({});
//   }
// });

// // User login
// app.post("/api/session", async (req, res) => {
//   const { email, password } = req.body;

//   db.query("SELECT id, name, password FROM users WHERE email=$1", [email])
//     .then((dbRes) => {
//       if (dbRes.rows.length === 0) {
//         return res.status(400).json({
//           message:
//             "The e-mail address and/or password you specified are not correct.",
//         });
//       }
//       const user = dbRes.rows[0];
//       const hashedPassword = user.password;
//       if (isValidPassword(password, hashedPassword)) {
//         req.session.email = email;
//         req.session.user_id = user.id;
//         req.session.name = user.name;
//         return res.json({});
//       } else {
//         return res.status(400).json({
//           message:
//             "The e-mail address and/or password you specified are not correct.",
//         });
//       }
//     })
//     .catch((err) => {
//       res.status(500).json({});
//     });
// });
