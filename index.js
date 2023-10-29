/**
 * Módulo principal para iniciar el servidor de la aplicación.
 * @module server
 */

// Importa el módulo http de Node.js.
const http = require("node:http");

// Importa la aplicación Express definida en el archivo "./src/app".
const app = require("./src/app");

// Importa el logger de información para registrar eventos del servidor.
const { infoLogger } = require("./src/helpers/logger");

// Configura variables de entorno a partir del archivo ".env".
require("dotenv").config();

// Configura la conexión a la base de datos a través del archivo "./src/config/config.db".
require("./src/config/config.db");

// Crea un servidor HTTP utilizando la aplicación Express.
const server = http.createServer(app);

// Obtiene el puerto del archivo de entorno o utiliza el puerto 3000 por defecto.
const PORT = process.env.PORT ?? 3000;

// Inicia el servidor y lo hace escuchar en el puerto especificado.
server.listen(PORT);

// Escucha eventos del servidor una vez que está listo para recibir solicitudes.
server.on("listening", () => {
  /**
   * Registra un mensaje informativo cuando el servidor está escuchando en un puerto.
   * @function
   * @name infoLogger.info
   * @param {string} message - Mensaje informativo a registrar.
   */
  infoLogger.info(`Sevidor escuchando en el puerto ${PORT}`);
});

// Escucha eventos de error del servidor y registra los errores en la consola.
server.on("error", (error) => {
  console.log(error);
});
