const { HttpError } = require("../helpers");

const valideBody = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);

    if (Object.keys(req.body).length === 0) {
      if (req.method === "PATCH") next(HttpError(400, `missing fields favorite`));
      next(HttpError(400, "missing fields"));
    }

    if (error) {
      const errorField = error.details[0].context.label;
      next(HttpError(400, `missing required ${errorField} field`));
    }
    next();
  };
  return func;
};

module.exports = valideBody;
