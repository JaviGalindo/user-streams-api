const config = require("../config/config");
const port = config.SERVER_PORT;
const app = require("./app");
const logger = require("./utils/logger");

app.listen(port, () => {
  logger.info("Server is running");
});