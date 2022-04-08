const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");

const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/.env" });

// uri of the database
const PORT = process.env.PORT || 8080;
const dbURI = process.env.DB_URI.toString();

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
  })
  .then((result) => {
    app.listen(PORT);
    console.log(`listening on port ${PORT} \nConnected to DB`);
  })
  .catch((err) => console.log(err));

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());

// route handlers
app.use("/api/users", require("./routes/user.route"));
app.use("/api/vote", require("./routes/vote.route"));
app.use("/api/results", require("./routes/results.route"));
