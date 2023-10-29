/**
 * Controlador para operaciones relacionadas con inmuebles.
 * @module controller/inmueble.controller
 */
const InmuebleModel = require("../model/inmueble.model");
const { erroresLogger } = require("../helpers/logger");

/**
 * Obtiene todos los inmuebles.
 * @function
 * @async
 * @param {object} req - Objeto de solicitud de Express.
 * @param {object} res - Objeto de respuesta de Express.
 */
const getAllInmuebles = async (req, res) => {
  try {
    const inmuebles = await InmuebleModel.find();
    res.status(200).json(inmuebles);
  } catch (error) {
    //Registra un error en caso de que se produzca una excepción.
    erroresLogger.error("[MESSAGE]:" + error.message);
    res.status(400).json({ error: error.message });
  }
};

/**
 * Obtiene un inmueble por su identificador.
 * @function
 * @async
 * @param {object} req - Objeto de solicitud de Express.
 * @param {object} res - Objeto de respuesta de Express.
 */
const getInmuebleById = async (req, res) => {
  try {
    const { inmuebleId } = req.params;
    const inmueble = await InmuebleModel.findById(inmuebleId);
    res.status(200).json(inmueble);
  } catch (error) {
    //Registra un error en caso de que se produzca una excepción.
    erroresLogger.error("[MESSAGE]:" + error.message);
    res.status(400).json({ error: error.message });
  }
};

/**
 * Crea un nuevo inmueble.
 * @function
 * @async
 * @param {object} req - Objeto de solicitud de Express con los datos del inmueble a crear.
 * @param {object} res - Objeto de respuesta de Express.
 */
const createInmueble = async (req, res) => {
  try {
    const inmueble = await InmuebleModel.create(req.body);
    res.status(201).json(inmueble);
  } catch (error) {
    //Registra un error en caso de que se produzca una excepción.
    erroresLogger.error("[MESSAGE]:" + error.message);
    res.status(400).json({ error: error.message });
  }
};

/**
 * Actualiza un inmueble existente por su identificador.
 * @function
 * @async
 * @param {object} req - Objeto de solicitud de Express con los datos actualizados del inmueble.
 * @param {object} res - Objeto de respuesta de Express.
 */
const updateInmueble = async (req, res) => {
  try {
    const { inmuebleId } = req.params;
    const inmueble = await InmuebleModel.findByIdAndUpdate(
      inmuebleId,
      req.body,
      { new: true, runValidators: true }
    );
    res.status(200).json(inmueble);
  } catch (error) {
    //Registra un error en caso de que se produzca una excepción.
    erroresLogger.error("[MESSAGE]:" + error.message);
    res.status(400).json({ error: error.message });
  }
};

/**
 * Elimina un inmueble por su identificador.
 * @function
 * @async
 * @param {object} req - Objeto de solicitud de Express.
 * @param {object} res - Objeto de respuesta de Express.
 */
const deleteInmueble = async (req, res) => {
  try {
    const { inmuebleId } = req.params;
    const inmueble = await InmuebleModel.findByIdAndDelete(inmuebleId);
    res.status(200).json(inmueble);
  } catch (error) {
    //Registra un error en caso de que se produzca una excepción.
    erroresLogger.error("[MESSAGE]:" + error.message);
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllInmuebles,
  getInmuebleById,
  createInmueble,
  updateInmueble,
  deleteInmueble,
};
