require('dotenv').config()
const express = require('express')
const { connectDB } = require('./src/config/db')
const usersRoutes = require('./src/api/routes/user')
const motoRoutes = require('./src/api/routes/moto')
const equipamientoRoutes = require('./src/api/routes/equipamiento')
const app = express()

const port = process.env.PORT || 3000

//  conexión a la base de datos
connectDB()

// Middleware to parse JSON bodies
app.use(express.json())

// CRUD de usaurios
app.use('/api/v1/users', usersRoutes)

// CRUD de motos
app.use('/api/v1/motos', motoRoutes)

//CRUD equipamientos
app.use('/api/v1/equipamientos', equipamientoRoutes)

//Inicio del servidor

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`)
})
