function validateSchema(obj, schema) {
    const {error, value} = schema.validate(obj);
    return {error, value};
}
module.exports = validateSchema;