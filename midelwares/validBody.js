const { HttpError } = require("../helpers");

const valideBody = (schema) => {
  const func = (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
      if (req.originalUrl.includes('/favorite')) next(HttpError(400, "missing fields favorite"));
      next(HttpError(400, "missing fields"));
    }

    const { error } = schema.validate(req.body);
    if (error) {
      const errorField = error.details[0].context.label;
      next(HttpError(400, `missing required ${errorField} field`));
    }
    next();
  };
  return func;
};

module.exports = valideBody;
