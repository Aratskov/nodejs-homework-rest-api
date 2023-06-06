const { Schema, model } = require("mongoose");

const Joi = require("joi");

const { handleMoongoseError } = require("../helpers/index");

const userSchema = new Schema(
  {
    email: {
      type: String,
      match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      unique: true,
      required: [true, 'Email is required'],
    },
    password: {
      type: String,
      required: [true, 'Set password for user'],
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter"
    },
    token: {
      type: String,
      default: "",
    },
    avatarURL:{
      type: String,
      required:true
    }
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMoongoseError);

const universalSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const schemas = {
  universalSchema,
};

const User = model("user", userSchema);

module.exports = { User, schemas };
