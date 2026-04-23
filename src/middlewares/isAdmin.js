const isAdmin = (req, res, next) => {
  try {
    if (req.user && req.user.role === 'admin') {
      next()
    } else {
      return res.status(401).json({ message: 'Error de autorización' })
    }
  } catch (error) {
    return res
      .status(401)
      .json({ message: 'Error de authotización', error: error.message })
  }
}

module.exports = { isAdmin }

