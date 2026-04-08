## Endpoints

### Usuarios

| Método | Endpoint               | Descripción                                   |
| ------ | ---------------------- | --------------------------------------------- |
| POST   | /api/v1/users/register | Registrar un usuario                          |
| POST   | /api/v1/users/login    | Genera un token autentificado para un usuario |
| GET    | /api/v1/users          | Obtiene la lista de todos los usuarios        |
| GET    | /api/v1/users/:id      | Devuelve un usuario por su id                 |
| PUT    | /api/v1/users/:id      | Actualiza un usuario existente                |
| DELETE | /api/v1/users/:id      | Elimina un usuario por su id                  |

### Motos

| Método | Endpoint          | Descripción                           |
| ------ | ----------------- | ------------------------------------- |
| GET    | /api/v1/motos     | Obtiene la lista de todos los motos   |
| GET    | /api/v1/motos/:id | Devuelve motos por su id              |
| POST   | /api/v1/motos     | Crea una moto (JSON en el body)       |
| PUT    | /api/v1/motos/:id | Actualiza una moto existente          |
| DELETE | /api/v1/motos/:id | Elimina una moto por su id            |

### Equipamiento

| Método | Endpoint                 | Descripción                         |
| ------ | ------------------------ | ----------------------------------- |
| GET    | /api/v1/equipamiento     | Lista todos los equipamientos        |
| GET    | /api/v1/equipamiento/:id | Devuelve un equipamiento por su id  |
| POST   | /api/v1/equipamiento     | Crea un equipamiento                |
| PUT    | /api/v1/equipamiento/:id | Actualiza un equipamiento existente |
| DELETE | /api/v1/equipamiento/:id | Elimina un equipamiento por su id   |
