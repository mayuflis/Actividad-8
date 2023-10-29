const InmuebleModel = require("../model/inmueble.model");
const { erroresLogger } = require("../helpers/logger");
const getAllInmuebles = async (req, res) => {
  try {
    const inmuebles = await InmuebleModel.find();
    res.status(200).json(inmuebles);
  } catch (error) {
    erroresLogger.error("[MESSAGE]:" + error.message);
    res.status(400).json({ error: error.message });
  }
};

const getInmuebleById = async (req, res) => {
  try {
    const { inmuebleId } = req.params;
    const inmueble = await InmuebleModel.findById(inmuebleId);
    res.status(200).json(inmueble);
  } catch (error) {
    erroresLogger.error("[MESSAGE]:" + error.message);
    res.status(400).json({ error: error.message });
  }
};

const createInmueble = async (req, res) => {
  try {
    const inmueble = await InmuebleModel.create(req.body);
    res.status(201).json(inmueble);
  } catch (error) {
    erroresLogger.error("[MESSAGE]:" + error.message);
    res.status(400).json({ error: error.message });
  }
};

const updateInmueble = async (req, res) => {
  try {
    const { inmuebleId } = req.params;
    const inmueble = await InmuebleModel.findByIdAndUpdate(
      inmuebleId,
      req.body,
      { new: true }
    );
    res.status(200).json(inmueble);
  } catch (error) {
    erroresLogger.error("[MESSAGE]:" + error.message);
    res.status(400).json({ error: error.message });
  }
};

const deleteInmueble = async (req, res) => {
  try {
    const { inmuebleId } = req.params;
    const inmueble = await InmuebleModel.findByIdAndDelete(inmuebleId);
    res.status(200).json(inmueble);
  } catch (error) {
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
