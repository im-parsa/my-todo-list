const moment = require("moment");


exports.formatDate = (date) =>
{
    return moment(date).format("D MMM YYYY");
};