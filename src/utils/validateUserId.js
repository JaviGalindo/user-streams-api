const Joi = require("joi");
const validateSchema = require("./validateSchema");
const schema = Joi.object({
    userId: Joi.string().guid().required()
});

function validateUserId(params) {
    const {error} = validateSchema(params, schema);
    return error;
}

module.exports = validateUserId;
