/**
 * Módulo para la conexión a la base de datos MongoDB.
 * @module database/db
 */

const mongoose = require("mongoose");

/**
 * Conecta la aplicación a la base de datos MongoDB utilizando la URL especificada en la variable de entorno "MONGO_URL".
 * @function
 * @async
 * @throws {Error} Si la conexión a la base de datos no se puede establecer.
 */
mongoose.connect(process.env.MONGO_URL);
