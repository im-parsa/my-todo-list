const moment = require("moment"),
    chalk = require('chalk'),
    connectDB = require("./config/mongodb.service");

console.log('|' + chalk.blue(' ✅  ') + chalk.black.bgBlue(moment().format(' h:mm:ss a ')) + ' - ' + chalk.blue(moment().locale("en").format('MMMM Do YYYY')));

const app = require('./app.service');

const port = process.env.PORT || 3245;

app.listen(port, () =>
{
    console.log('|' + chalk.blue(' ✅  ') + chalk.black.bgBlue(moment().format(' h:mm:ss a ')) + ' - ' + chalk.blue(`App running on port ${port}...`));
});

connectDB().then();