const connectToMongo = require("./db");
const express = require("express");

const cors = require("cors");
// connection to mongoDB
connectToMongo();

const app = express();
const port = 5000;
app.use(cors());

//To use json
app.use(express.json());

//Using different routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/marks", require("./routes/marks"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
