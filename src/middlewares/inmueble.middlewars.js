const InmuebleModel = require("../model/inmueble.model");
const { erroresLogger } = require("../helpers/logger");

const validatorId = async (req, res, next) => {
  try {
    const { inmuebleId } = req.params;
    const result = await InmuebleModel.findById(inmuebleId);

    if (!result) {
      erroresLogger.error("[MESSAGE]:El producto no existe");
      return res.json({ error: "El producto no existe" });
    }

    next();
  } catch (error) {
    logger.error(error.message);
    res.status(400).json({ error: error.message });
  }
};

module.exports = { validatorId };
