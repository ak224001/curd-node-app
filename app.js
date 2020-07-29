require("./models/db");
const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const app = express();

app.engine(
  "hbs",
  exphbs({
    defaultLayout: "main",
    layoutsDir: __dirname + "/views/layouts",
    extname: ".hbs",
  })
);
app.set("views", path.join(__dirname, "/views/"));
app.set("view engine", "hbs");

const Employeeroutes = require("./routes/router");
// app.use(express.json());
app.use("/", Employeeroutes);

// var port = process.env.Port || 5000;

var server_port = process.env.YOUR_PORT || process.env.PORT || 3000;
// var server_host = process.env.YOUR_HOST || '0.0.0.0';

app.listen(server_port, function () {
  console.log("Listening on port %d", server_port);
});

// app.listen(port, () => {
//   console.log(`Listening on port ${port}..`);
// });
