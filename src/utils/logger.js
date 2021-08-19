const { createLogger, transports, format } = require("winston");
const {LOGGER_LEVEL} = require("../../config/config");
module.exports = createLogger({
    "transports": new transports.Console({
        "level": LOGGER_LEVEL
    }),
    "format": format.combine(
        format.timestamp({
           format: "DD/MM/YYYY HH:mm:ss"
       }),
        format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`),
    )
});