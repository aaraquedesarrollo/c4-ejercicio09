const { Schema, model } = require("mongoose");

const TipoSchema = new Schema({
  tipo: {
    type: String,
    required: true,
    unique: true,
  },
});

const Tipo = model("Tipo", TipoSchema, "tipos");

module.exports = Tipo;
