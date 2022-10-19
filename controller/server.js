const express = require("express");
const fs = require("fs");
const app = express();
const db = require("../data_base/db");

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
  } catch (err) {
    res.status(500).json({});
  }
});

app.get("*", (req, res) => {
  res.setHeader("content-type", "text/html");
  fs.createReadStream(`${__dirname}/client/build/index.html`).pipe(res);
});

app.listen(port, () => console.log(`Listening at localhost:${port}`));
