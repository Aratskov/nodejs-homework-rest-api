const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMoongoseError } = require("../helpers/index");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
      match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      required: [true, "Set email for contact"],
    },
    phone: {
      type: String,
      required: [true, "Set phone for contact"],
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false }
);

contactSchema.post("save", handleMoongoseError);

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  phone: Joi.number().required(),
  favorite: Joi.boolean(),
});

const updateSchemaFavorite = Joi.object({
  favorite: Joi.boolean().required(),
});



const schema = { addSchema, updateSchemaFavorite };

const Contact = model("contact", contactSchema);

module.exports = { Contact, schema };
