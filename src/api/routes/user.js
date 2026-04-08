const usersRoutes = require('express').Router()
const {
  registerUser,
  loginUser,
  getUsers,
  deleteUser,
  getUser,
  putUser
} = require('../controllers/user')
const { isAuth } = require('../../middlewares/auth')
const { isAdmin } = require('../../middlewares/isAdmin')
const { canDeleteUser } = require('../../middlewares/canDeleteUser')

// Ruta para registrar un nuevo usuario
usersRoutes.post('/register', registerUser)
usersRoutes.post('/login', loginUser)
usersRoutes.delete('/:id', isAuth, canDeleteUser, deleteUser)
usersRoutes.get('/', isAuth, getUsers)
usersRoutes.get('/:id', isAuth, getUser)
usersRoutes.put('/:id', isAuth, isAdmin, putUser)

module.exports = usersRoutes
