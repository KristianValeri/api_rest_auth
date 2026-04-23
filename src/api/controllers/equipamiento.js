const { Equipamiento } = require('../models/equipamiento')
const { mongoose } = require("mongoose")

const getEquipamientos = async (req, res, next) => {
  try {
    const equipamientos = await Equipamiento.find()
    res.json(equipamientos)
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los equipamientos', error: error.message })
  }
}
 const getEquipamiento = async (req, res, next) => {
   try {
    const equipamiento = await Equipamiento.findById(req.params.id)
    res.json(equipamiento)    
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el equipamiento', error: error.message })
  }
 }

const postEquipamiento = async (req, res, next) => {
  try {
    const newEquipamiento = new Equipamiento(req.body)
    const savedEquipamiento = await newEquipamiento.save()
    res.json(savedEquipamiento)
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el equipamiento', error: error.message })
  }
}

const putEquipamiento = async (req, res, next) => {
  try {
    const equipamientoUpdated = await Equipamiento.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.json(equipamientoUpdated)
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el equipamiento', error: error.message })
  }
}

const deleteEquipamiento = async (req, res, next) => {
  try {
    const equipamientoDeleted = await Equipamiento.findByIdAndDelete(req.params.id)
    res.json(equipamientoDeleted)
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el equipamiento', error: error.message })
  }
}

module.exports = {
  getEquipamientos,
  getEquipamiento,
  postEquipamiento,
  putEquipamiento,
  deleteEquipamiento
}