const express = require("express"),
    compression = require("compression"),

    indexRoutes = require("./routes/main.routing"),
    adminRoutes = require("./routes/admin.routing"),
    errorController = require("./controllers/error.controller"),
    bodyParser = require("body-parser"),

    { setStatics } = require("./utils/statics.entity"),

    app = express();


setStatics(app);

app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.json());

app.use(compression());

app.use((req, res, next) =>
{
    req.requestTime = new Date().toISOString();
    next();
});

app.use(indexRoutes);
app.use("/admin", adminRoutes);

app.use(errorController.get404);

module.exports = app;
