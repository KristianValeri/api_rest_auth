const mongoose = require('mongoose')
const { generateToken } = require('../../config/jwt')
const { User } = require('../models/user')
const bcrypt = require('bcrypt')
const verifyToken = require('../../config/jwt')

const registerUser = async (req, res, next) => {
  try {
    // Lógica para registrar un nuevo usuario
    const newUser = new User({
      userName: req.body.userName,
      password: req.body.password
    })

    const userDuplicated = await User.findOne({ userName: req.body.userName })
    if (userDuplicated)
      return res.status(400).json({ message: 'El nombre de usuario ya existe' })

    const userSaved = await newUser.save()
    res.status(201).json(userSaved)
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Error al registrar el usuario', error: error.message })
  }
}

const loginUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ userName: req.body.userName })
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' })

    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        const token = generateToken(user._id)
        return res
          .status(200)
          .json({ message: 'Inicio de sesión exitoso', token })
      } else {
        return res
          .status(400)
          .json({ message: 'Contraseña o usuario incorrectos' })
      }
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Error al iniciar sesión', error: error.message })
  }
}

const deleteUser = async (req, res, next) => {
  try {
    const userDeleted = await User.findByIdAndDelete(req.params.id)
    res
      .status(200)
      .json({ message: 'Usuario eliminado correctamente', userDeleted })
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Error al eliminar el usuario', error: error.message })
  }
}

const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id)
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' })
    res.status(200).json(user)
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Error al obtener el usuario', error: error.message })
  }
}

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find()
    res.status(200).json(users)
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Error al obtener el usuarios', error: error.message })
  }
}

const putUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id)

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' })
    }
    
    Object.assign(user, req.body)

    await user.save()

    res.status(200).json({
      message: 'Usuario actualizado correctamente',
      userUpdated: user
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Error al actualizar el usuario',
      error: error.message
    })
  }
}

module.exports = {
  loginUser,
  deleteUser,
  getUser,
  getUsers,
  putUser,
  registerUser
}
