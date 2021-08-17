const config = require("../config/config");
const port = config.SERVER_PORT;
const app = require("./app");


app.listen(port, () => {
  console.log("Server running");
});