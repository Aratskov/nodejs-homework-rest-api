const express = require("express");
const router = express.Router();

const { validBody, isValidId } = require("../../midelwares");
const { schema } = require("../../models/contact");

const {
  getAll,
  getById,
  add,
  deleteById,
  updateById,
  updateFavorite,
} = require("../../controllers/contacts");

router.get("/", getAll);
router.get("/:contactId", isValidId, getById);
router.post("/", validBody(schema.addSchema), add);
router.delete("/:contactId", isValidId, deleteById);
router.put("/:contactId", isValidId, validBody(schema.addSchema), updateById);
router.patch(
  "/:contactId/favorite",
  isValidId,
  validBody(schema.updateSchemaFavorite),
  updateFavorite
);

module.exports = router;
