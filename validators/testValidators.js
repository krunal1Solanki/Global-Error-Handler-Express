const Joi = require("joi");
const ErrorHandlerClass = require("../utils/ErorrHandlerClass");

const nameSchema = Joi.object({
  name: Joi.string().required()
});

const validateName = (req, res, next) => {
    const { error } = nameSchema.validate(req.body);
    if (error) {
      const errorMessage = error.details[0].message;
      return next(new ErrorHandlerClass(errorMessage, 400));
    }
    next();
};



  module.exports = {validateName}