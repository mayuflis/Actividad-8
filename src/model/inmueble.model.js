/**
 * Módulo que define el esquema de un inmueble utilizando Mongoose.
 * @module models/inmuebleModel
 */
const { Schema, model } = require("mongoose");

/**
 * Definición del esquema de inmueble.
 * @typedef {Object} InmuebleSchema
 * @property {Number} piso - El número de piso del inmueble (entre 3 y 25 caracteres).
 * @property {String} letra - La letra del inmueble (máximo 1 caracter).
 * @property {Number} extension - La extensión del inmueble (obligatorio).
 * @property {Number} habitaciones - El número de habitaciones del inmueble (obligatorio).
 * @property {Boolean} alquilado - Indica si el inmueble está alquilado (obligatorio).
 * @property {String} propietario - El nombre del propietario del inmueble (obligatorio).
 * @property {String} email - La dirección de correo electrónico del propietario del inmueble (obligatorio).
 */

/**
 * Esquema de mongoose para el modelo de inmueble.
 * @type {InmuebleSchema}
 */
const inmuebleSchema = new Schema(
  {
    piso: {
      type: Number,
      minLength: 3,
      maxLength: 25,
    },
    letra: {
      type: String,
      maxLength: 1,
    },
    extension: {
      type: Number,
      required: [true, "The name is required"],
    },
    habitaciones: {
      type: Number,
      required: [true, "The number of rooms are required"],
    },
    alquilado: {
      type: Boolean,
      required: [true, "Rented field is require"],
    },
    propietario: {
      type: String,
      required: [true, "Owners name  is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      match: [
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\. [0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please add a valid email address.",
      ],
      lowerCase: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

/**
 * Modelo de mongoose para inmueble.
 * @type {model}
 */
module.exports = model("inmueble", inmuebleSchema);
