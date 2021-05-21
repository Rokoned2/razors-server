const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const jsonServer = require("json-server");
const mongoose = require("mongoose");

// const bodyParser = require("body-parser");
// const cookieParser = require("cookie-parser");
const config = require("./config/key");

const connect = mongoose
  .connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.use(cors());

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(cookieParser());

app.use("/uploads", express.static("uploads"));

app.use("/users", require("./routes/users"));
app.use("/product", require("./routes/product"));

// app.use("/", jsonServer.router("db.json"));
// app.use("/users", jsonServer.router("users.json"));

// if (process.env.NODE_ENV === "production") {
//   // Set static folder
//   app.use(express.static("client/build"));

//   // index.html for all page routes
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
//   });
// }

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server Running at ${port}`);
});
