const mongoose = require('mongoose')
const motoSchema = new mongoose.Schema(
  {
    marca: { type: String, required: true },
    modelo: { type: String, required: true },
    precio: { type: Number, required: true },
    cilindrada: { type: Number, required: true },
    color: { type: String, required: true },
    img: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users' }
  },
  {
    timestamps: true,
    collection: 'motos'
  }
)
const Moto = mongoose.model('motos', motoSchema, 'motos')
module.exports = { Moto }
