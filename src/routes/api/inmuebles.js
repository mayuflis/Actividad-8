const router = require("express").Router();
const {
  getAllInmuebles,
  getInmuebleById,
  createInmueble,
  updateInmueble,
  deleteInmueble,
} = require("../../controller/inmueble.controller");

const validator = require("../../middlewares/inmueble.middlewars");

router.get("/", getAllInmuebles);
router.get("/:inmuebleId", validator.validatorId, getInmuebleById);
router.post("/", createInmueble);
router.put("/:inmuebleId", validator.validatorId, updateInmueble);
router.delete("/:inmuebleId", validator.validatorId, deleteInmueble);

module.exports = router;
