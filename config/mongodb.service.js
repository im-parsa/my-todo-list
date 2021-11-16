const mongoose = require("mongoose"),
    moment = require("moment"),
    chalk = require("chalk"),

    connectDB = async () =>
    {
        try
        {
            const DB_PANEL = process.env.DATABASE;

            mongoose
                .connect(DB_PANEL,
                    {
                        useNewUrlParser: true,
                        useUnifiedTopology: true,
                        useCreateIndex: true,
                        useFindAndModify: false,
                    })
                .then(() => console.log('|' + chalk.blue(' ✅  ') + chalk.black.bgBlue(moment().format(' h:mm:ss a ')) + ' - ' + chalk.blue(`MongoDB connection successful!`)));
        }
        catch (err)
        {
            console.log(err);
            process.exit(1);
        }
    };


module.exports = connectDB;