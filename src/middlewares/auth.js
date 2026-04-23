const { User } = require('../api/models/user')
const { verifyToken } = require('../config/jwt')

const isAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization
    console.log('Headers:', req.headers)
    if (!token)
      return res.status(401).json({ message: 'Token no proporcionado' })

    const parsedToken = token.replace('Bearer ', '')
    const { id } = verifyToken(parsedToken)
    const userData = await User.findById(id).select('-password')
    req.user = userData
    next()
  } catch (error) {
    return res
      .status(401)
      .json({ message: 'Token inválido', error: error.message })
  }
}

module.exports = { isAuth }
