const router = require("express").Router();
const {
  getAllInmuebles,
  getInmuebleById,
  createInmueble,
  updateInmueble,
  deleteInmueble,
} = require("../../controller/inmueble.controller");

router.get("/", getAllInmuebles);
router.get("/:inmuebleId", getInmuebleById);
router.post("/", createInmueble);
router.put("/:inmuebleId", updateInmueble);
router.delete("/:inmuebleId", deleteInmueble);

module.exports = router;
