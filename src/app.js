/**
 * Módulo de configuración de una aplicación Express.js
 *
 * @module app
 */
const express = require("express");

//Importa el módulo cors para ralizar peticiones cruzadas
const cors = require("cors");

// Importa el logger de información (infoLogger) desde "./helpers/logger".
const { infoLogger } = require("./helpers/logger");

// Crea una instancia de la aplicación Express.
const app = express();

// Habilita el middleware CORS para permitir solicitudes cruzadas (Cross-Origin Resource Sharing).
app.use(cors());

// Habilita el middleware para el análisis de cuerpos JSON en las solicitudes.
app.use(express.json());

/**
 * Middleware para registrar información sobre las solicitudes entrantes.
 *
 * @function
 * @param {object} req - El objeto de solicitud HTTP.
 * @param {object} res - El objeto de respuesta HTTP.
 * @param {function} next - La función que pasa la solicitud al siguiente middleware.
 */
app.use((req, res, next) => {
  infoLogger.info(`[Method]: ${req.method} [Url]: ${req.url}`);
  next();
});

// Rutas para la API se manejarán a través del módulo "./routes/api".
app.use("/api", require("./routes/api"));

// Exporta la aplicación Express configurada.
module.exports = app;
