const { Schema, model } = require("mongoose");

const inmuebleSchema = new Schema(
  {
    piso: {
      type: String,
    },
    letra: {
      type: String,
    },
    extension: {
      type: Number,
      require: [true, "The name is required"],
    },
    habitaciones: {
      type: Number,
      require: [true, "The number of rooms are required"],
    },
    alquilado: {
      type: Boolean,
      require: [true, "Rented field is require"],
    },
    propietario: {
      type: String,
      require: [true, "Owner´s name  is required"],
    },
    email: {
      type: String,
      require: [true, "Email is required"],
      unique: true,
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
