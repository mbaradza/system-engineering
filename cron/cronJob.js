var cron = require('node-cron');
const logger = require("../logger")


function sendChangeAlert() {
cron.schedule('*/1 * * * *', () => {
  logger.info(" I AM STILL YET TO BE CHANGED 123 !!!")
}, {
  scheduled: true,
  timezone: "Africa/Harare"
});
}

module.exports = {sendChangeAlert}