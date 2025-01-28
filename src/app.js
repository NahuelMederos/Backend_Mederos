import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";

const app = express();
const PORT = process.env.PORT || 8080;

app.engine("handlebars", handlebars.engine());
app.set("views", `${__dirname}/views`);
app.set("view engine", "handlebars");

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
