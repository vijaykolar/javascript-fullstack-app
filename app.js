const e = require("express");
const express = require("express");
const app = express();
const router = require("./routes/router");
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.set("views", "views");
app.set("view engine", "ejs");

app.use("/", router);
// app.get("/sign-up", router);
app.listen(PORT, () => console.log(`App is listening at ${PORT}`));
