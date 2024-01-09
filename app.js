const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const productRouter = require("./router/web");
const url = "mongodb://localhost:27017";
const dbName = "Computer";
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(`${url}/${dbName}`).then(() => {
    console.log("Kết Nối thành Công");
    app.listen(9999, () => {
        console.log("Kết Nối 9999");
    })
}).catch((err) => {
    console.log("Loi du lieu", err);
});

app.set("view engine", "hbs");
app.use("/uploads", express.static("uploads"));
app.use("/", productRouter);
