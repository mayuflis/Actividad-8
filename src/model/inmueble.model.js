const { Schema, model } = require("mongoose");

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

module.exports = model("inmueble", inmuebleSchema);
