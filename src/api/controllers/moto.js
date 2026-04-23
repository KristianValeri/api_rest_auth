
const { Moto } = require('../models/moto')
const { isAuth } = require('../../middlewares/auth')
const { isAdmin } = require('../../middlewares/isAdmin')


const getMotos = async (req, res, next) => {
  try {
    const motos = await Moto.find()
    res.json(motos)
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las motos', error: error.message })
  }
}



const putMoto = async (req, res, next) => {
  try {
    const motoUpdated = await Moto.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.json(motoUpdated)

  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la moto', error: error.message })
  }
}



const deleteMoto = async (req, res, next) => {
  try {
    const motoDeleted = await Moto.findByIdAndDelete(req.params.id)
    res.json(motoDeleted)
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la moto', error: error.message })
  }
}



const getMoto = async (req, res, next) => {
  try {
    const moto = await Moto.findById(req.params.id)
    res.json(moto)
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la moto', error: error.message })
  }
}

const postMoto = async (req, res, next) => {
  try {
    const newMoto = new Moto(req.body)
    const savedMoto = await newMoto.save()
    res.json(savedMoto)
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la moto', error: error.message })
  }
}
module.exports = { getMotos, putMoto, deleteMoto, getMoto, postMoto}