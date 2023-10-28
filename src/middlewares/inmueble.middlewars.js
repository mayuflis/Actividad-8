const InmuebleModel = require("../model/inmueble.model");
const validatorId = async (req, res, next) => {
  try {
    const { inmuebleId } = req.params;
    const result = await InmuebleModel.findById(inmuebleId);

    if (!result) {
      return res.json({ error: "El producto no existe" });
    }

    next();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { validatorId };
