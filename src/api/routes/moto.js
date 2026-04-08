const motosRouter = require('express').Router()
const { Moto } = require('../models/moto')
const { isAuth } = require('../../middlewares/auth')
const { isAdmin } = require('../../middlewares/isAdmin')
const {
  getMotos,
  putMoto,
  deleteMoto,
  getMoto,
  postMoto
} = require('../controllers/moto')

motosRouter.get('/', getMotos)
motosRouter.get('/:id', getMoto)
motosRouter.post('/', isAuth, postMoto)
motosRouter.put('/:id', isAuth, isAdmin, putMoto)
motosRouter.delete('/:id', isAuth, isAdmin, deleteMoto)

module.exports = motosRouter
