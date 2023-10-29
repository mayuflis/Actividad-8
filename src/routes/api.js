/**
 * Módulo de enrutamiento Express para "inmuebles".
 *
 * @module routes/inmuebles
 */

// Importa el módulo 'express' y crea un enrutador de Express.
const router = require("express").Router();

/**
 * Asocia rutas relacionadas con "inmuebles" al controlador correspondiente a través del módulo "./api/inmuebles".
 *
 * @function
 * @param {string} path - La ruta base para las rutas relacionadas con "inmuebles".
 * @param {object} middleware - El controlador de rutas para "inmuebles" definido en "./api/inmuebles".
 */
router.use("/inmuebles", require("./api/inmuebles"));

// Exporta el enrutador configurado para su uso en otras partes de la aplicación.
module.exports = router;
