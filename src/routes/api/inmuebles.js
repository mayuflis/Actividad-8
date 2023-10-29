/**
 * Este módulo define las rutas relacionadas con los inmuebles y los controladores que las manejan.
 * También se incluyen validaciones de middleware para ciertas rutas.
 * @module routes/inmuebleRoutes
 */
const router = require("express").Router();

const {
  getAllInmuebles,
  getInmuebleById,
  createInmueble,
  updateInmueble,
  deleteInmueble,
} = require("../../controller/inmueble.controller");

/**
 * Este módulo define las rutas relacionadas con los inmuebles y los controladores que las manejan.
 * También se incluyen validaciones de middleware para ciertas rutas.
 * @module routes/inmuebleRoutes
 */
const validator = require("../../middlewares/inmueble.middlewars");

/**
 * Ruta para obtener todos los inmuebles.
 * @name GET /inmuebles/
 */
router.get("/", getAllInmuebles);

/**
 * Ruta para obtener un inmueble por su identificador.
 * @name GET /inmuebles/:inmuebleId
 * @function
 * @param {function} validator.validatorId - Middleware para validar el ID del inmueble.
 */
router.get("/:inmuebleId", validator.validatorId, getInmuebleById);

/**
 * Ruta para crear un nuevo inmueble.
 * @name POST /inmuebles/
 */
router.post("/", createInmueble);

/**
 * Ruta para actualizar un inmueble existente por su identificador.
 * @name PUT /inmuebles/:inmuebleId
 * @function
 * @param {function} validator.validatorId - Middleware para validar el ID del inmueble.
 */
router.put("/:inmuebleId", validator.validatorId, updateInmueble);

/**
 * Ruta para eliminar un inmueble por su identificador.
 * @name DELETE /inmuebles/:inmuebleId
 * @function
 * @param {function} validator.validatorId - Middleware para validar el ID del inmueble.
 */
router.delete("/:inmuebleId", validator.validatorId, deleteInmueble);

module.exports = router;
