const canDeleteUser = (req, res, next) => {
  try {
    if (req.user && req.user.role === 'admin') {
      next()
    } else if (req.user && req.user._id && req.user._id.toString() === req.params.id) {
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

module.exports = { canDeleteUser }
