const httpStatusCodes = require("./httpStatusCodes");
function formatErrors(type, message) {
  const errorOb = {
  };
  switch(type) {
    case "Validation": 
      errorOb.code = httpStatusCodes.BAD_REQUEST;
      errorOb.message = message;
      return errorOb;
    case "Forbidden":
      errorOb.code = httpStatusCodes.FORBIDDEN;
      errorOb.message = message;
      return errorOb;
    case "NotFound":
      errorOb.code = httpStatusCodes.NOT_FOUND;
      errorOb.message = message;
      return errorOb;
  }
}

module.exports = formatErrors;