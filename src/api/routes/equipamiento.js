const express = require('express')
const equipamientoRouter = express.Router()
const {
  getEquipamientos,
  getEquipamiento,
  postEquipamiento,
  putEquipamiento,
  deleteEquipamiento
} = require('../controllers/equipamiento')
const { isAuth } = require('../../middlewares/auth')

equipamientoRouter.get('/', getEquipamientos)
equipamientoRouter.get('/:id', getEquipamiento)
equipamientoRouter.post('/', isAuth, postEquipamiento)
equipamientoRouter.put('/:id', isAuth, putEquipamiento)
equipamientoRouter.delete('/:id', isAuth, deleteEquipamiento)

module.exports = equipamientoRouter
