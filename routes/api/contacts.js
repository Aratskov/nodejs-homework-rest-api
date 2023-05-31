const express = require("express");
const router = express.Router();

const { validBody, isValidId, authenticate } = require("../../midelwares");
const { schema } = require("../../models/contact");

const {
  getAll,
  getById,
  add,
  deleteById,
  updateById,
  updateFavorite,
} = require("../../controllers/contacts");

router.get("/",authenticate, getAll);
router.get("/:contactId",authenticate, isValidId, getById);
router.post("/",authenticate, validBody(schema.addSchema), add);
router.delete("/:contactId",authenticate, isValidId, deleteById);
router.put("/:contactId",authenticate, isValidId, validBody(schema.addSchema), updateById);
router.patch(
  "/:contactId/favorite",authenticate,
  isValidId,
  validBody(schema.updateSchemaFavorite),
  updateFavorite
);

module.exports = router;
