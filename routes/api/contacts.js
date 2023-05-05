const express = require("express");
const router = express.Router();

const { valideBody } = require("../../midelwares");
const schema = require("../../schema/contacts");

const {
  getAll,
  getById,
  add,
  deleteById,
  updateById,
} = require("../../controllers/contacts");

router.get("/", getAll);
router.get("/:contactId", getById);
router.post("/", valideBody(schema.addSchema), add);
router.delete("/:contactId", deleteById);
router.put("/:contactId", valideBody(schema.addSchema), updateById);

module.exports = router;
