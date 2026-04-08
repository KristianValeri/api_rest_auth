require('dotenv').config()
const mongoose = require('mongoose')
const { Moto } = require('../../api/models/moto')
const { motos } = require('../../data/motos')

const lanzarSemilla = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)

    await Moto.collection.drop()
    console.log('Motos eliminadas')

    await Moto.insertMany(motos)
    console.log('Motos introducidas')

    await mongoose.disconnect()
    console.log('Desconectamos de BBDD')
  } catch (error) {
    console.log('error')
  }
}

lanzarSemilla()

module.exports = { motos }
