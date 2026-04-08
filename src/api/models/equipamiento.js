const mongoose = require('mongoose')
const equipamientoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  modelo: { type: String, required: true },
  img: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true }
},{
  timestamps: true,
  collection: 'equipamientos'
})
  
const Equipamiento = mongoose.model('equipamientos', equipamientoSchema, 'equipamientos')
module.exports = { Equipamiento }