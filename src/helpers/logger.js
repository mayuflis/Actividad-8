/**
 * Módulo para la gestión de registros de logs utilizando Log4js.
 * @module helpers/logger
 */

// Importa el módulo log4js para el registro de logs.
const log4js = require("log4js");

// Configuración del sistema de registro de logs.
log4js.configure({
  appenders: {
    // Appender para mostrar logs en la consola (stdout).
    out: { type: "stdout" },
    // Appender múltiple para guardar logs en archivos separados en un directorio "logs/".
    multi: {
      type: "multiFile",
      base: "logs/",
      property: "categoryName",
      extension: ".log",
      maxLogSize: 10485760,
      backups: 3,
      compress: true,
    },
  },
  // Configuración predeterminada de categoría de log.
  categories: {
    default: {
      appenders: ["out", "multi"],
      level: "debug",
    },
  },
});
//Obtención de un logger para mostrar información general.
/**
 * Logger para registrar información general.
 * @type {Logger}
 */
const infoLogger = log4js.getLogger("main");

//Obtención de un logger para mostrar información relacionada con los errores.
/**
 * Logger para registrar información relacionada con errores.
 * @type {Logger}
 */
const erroresLogger = log4js.getLogger("errores");
module.exports = { infoLogger, erroresLogger };
