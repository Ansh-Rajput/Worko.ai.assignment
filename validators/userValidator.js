const Joi = require('joi');

const validateUser = (user) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        name: Joi.string().required(),
        age: Joi.number().integer().min(0).required(),
        city: Joi.string().required(),
        zipCode: Joi.string().regex(/^\d{5}(-\d{4})?$/).required()
    });
    return schema.validate(user);
};

const validateId = (id) => {
    const schema = Joi.string().hex().length(24).required();
    return schema.validate(id);
};

const validateEmail = (email) => {
    const schema = Joi.string().email().required();
    return schema.validate(email);
};

const validateZipCode = (zipCode) => {
    const schema = Joi.string().regex(/^\d{5}(-\d{4})?$/).required();
    return schema.validate(zipCode);
};

module.exports = { validateUser, validateId, validateEmail, validateZipCode };
