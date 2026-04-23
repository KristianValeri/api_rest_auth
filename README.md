# API REST con Autenticación

Esta es una API RESTful construida con Node.js, Express y MongoDB, que incluye autenticación JWT para gestionar usuarios, motos y equipamientos.

## Descripción

La API permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre usuarios, motos y equipamientos. Incluye autenticación de usuarios mediante tokens JWT y roles de administrador para ciertas operaciones.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución de JavaScript.
- **Express.js**: Framework web para Node.js.
- **MongoDB**: Base de datos NoSQL.
- **Mongoose**: ODM para MongoDB.
- **JWT (JSON Web Tokens)**: Para autenticación.
- **bcrypt**: Para el hash de contraseñas.
- **dotenv**: Para variables de entorno.

## Instalación

1. Clona el repositorio:

   ```
   git clone <url-del-repositorio>
   cd api_rest_auth
   ```

2. Instala las dependencias:

   ```
   npm install
   ```

3. Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

   ```
   PORT=3000
   DB_URL=mongodb://localhost:27017/api_rest_auth
   JWT_SECRET=tu_secreto_jwt_aqui
   ```

4. Asegúrate de tener MongoDB corriendo en tu sistema.

## Uso

### Iniciar el servidor

Para desarrollo (con nodemon):

```
npm run dev
```

Para producción:

```
npm start
```

El servidor se ejecutará en `http://localhost:3000` (o el puerto especificado en `.env`).

### Semillas de datos

Para poblar la base de datos con datos de motos de ejemplo:

```
npm run motosSeed
```

## Endpoints

### Autenticación

| Método | Endpoint               | Descripción                        |
| ------ | ---------------------- | ---------------------------------- |
| POST   | /api/v1/users/register | Registrar un nuevo usuario         |
| POST   | /api/v1/users/login    | Iniciar sesión y obtener token JWT |

### Usuarios

| Método | Endpoint          | Descripción                                          |
| ------ | ----------------- | ---------------------------------------------------- |
| GET    | /api/v1/users     | Obtener lista de todos los usuarios (requiere admin) |
| GET    | /api/v1/users/:id | Obtener un usuario por ID                            |
| PUT    | /api/v1/users/:id | Actualizar un usuario (propio o admin)               |
| DELETE | /api/v1/users/:id | Eliminar un usuario (requiere permisos)              |

### Motos

| Método | Endpoint          | Descripción                      |
| ------ | ----------------- | -------------------------------- |
| GET    | /api/v1/motos     | Obtener lista de todas las motos |
| GET    | /api/v1/motos/:id | Obtener una moto por ID          |
| POST   | /api/v1/motos     | Crear una nueva moto             |
| PUT    | /api/v1/motos/:id | Actualizar una moto existente    |
| DELETE | /api/v1/motos/:id | Eliminar una moto                |

### Equipamiento

| Método | Endpoint                  | Descripción                              |
| ------ | ------------------------- | ---------------------------------------- |
| GET    | /api/v1/equipamientos     | Obtener lista de todos los equipamientos |
| GET    | /api/v1/equipamientos/:id | Obtener un equipamiento por ID           |
| POST   | /api/v1/equipamientos     | Crear un nuevo equipamiento              |
| PUT    | /api/v1/equipamientos/:id | Actualizar un equipamiento existente     |
| DELETE | /api/v1/equipamientos/:id | Eliminar un equipamiento                 |

### Headers de Autenticación

Para endpoints protegidos, incluye el header:

```
Authorization: Bearer <tu_token_jwt>
```

## Middlewares

- **auth.js**: Verifica la autenticación mediante JWT.
- **isAdmin.js**: Verifica si el usuario tiene rol de administrador.
- **canDeleteUser.js**: Verifica permisos para eliminar usuarios.

## Estructura del Proyecto

```
api_rest_auth/
├── index.js                 # Punto de entrada de la aplicación
├── package.json             # Dependencias y scripts
├── src/
│   ├── api/
│   │   ├── controllers/     # Lógica de controladores
│   │   ├── models/          # Modelos de datos
│   │   └── routes/          # Definición de rutas
│   ├── config/
│   │   ├── db.js            # Configuración de la base de datos
│   │   └── jwt.js           # Configuración de JWT
│   ├── middlewares/         # Middlewares personalizados
│   └── utils/
│       └── seeds/           # Scripts para poblar la base de datos
└── data/                    # Datos estáticos
```

## Contribución

1. Haz un fork del proyecto.
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`).
3. Commit tus cambios (`git commit -am 'Agrega nueva funcionalidad'`).
4. Push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia ISC.
