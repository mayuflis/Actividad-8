const InmuebleModel = require("../model/inmueble.model");
const { erroresLogger } = require("../helpers/logger");

/**
 * Middleware para validar la existencia de un inmueble por su identificador.
 * @function
 * @async
 * @param {object} req - Objeto de solicitud de Express.
 * @param {object} res - Objeto de respuesta de Express.
 * @param {function} next - Función que llama al siguiente middleware.
 * @throws {Error} Si se produce un error durante la validación.
 */
const validatorId = async (req, res, next) => {
  try {
    const { inmuebleId } = req.params;
    const result = await InmuebleModel.findById(inmuebleId);

    if (!result) {
      /**
       * Registra un error en caso de que se produzca una excepción.
       * @function
       * @name erroresLogger.error
       * @param {string}  - Mensaje de error a registrar.
       */
      erroresLogger.error("[MESSAGE]:El producto no existe");
      // Envia una respuesta de la no existencia del inmueble al cliente.
      return res.json({ error: "El producto no existe" });
    }

    next();
  } catch (error) {
    /**
     * Registra un error en caso de que se produzca una excepción.
     * @function
     * @name erroresLogger.error
     * @param {string} message - Mensaje de error a registrar.
     */
    logger.error(error.message);
    // Envia una respuesta de error al cliente.
    res.status(400).json({ error: error.message });
  }
};

module.exports = { validatorId };
