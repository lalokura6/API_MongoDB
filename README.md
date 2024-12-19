# API RESTful para una Pokédex

Aplicación creada con JAVASCRIPT y db-local

1. 📝 Pasos para Ejecutar:

- Clonar el repositorio
- Instalar dependencias: npm install
- Configurar variables de entorno (opcional)
- Iniciar servidor: npm start (nodemon)

2. 🚀 Endpoints: 

- Registro: POST /auth/register
- Login: POST /auth/login
- Listar Pokémon: GET /pokemon
- Detalles Pokémon: GET /pokemon/:id
- Mis Pokémon: GET /pokemon/trainer/mypokemons
- Crear Pokémon: POST /pokemon
- Actualizar Pokémon: PUT /pokemon/:id
- Eliminar Pokémon: DELETE /pokemon/:id


3. Copiar y completar para crear un usuario -POST- (http://localhost:3000/auth/register) :

  {
      "username": "",
      "password": "",
      "role: "",
  }


4. Copiar y completar para crear un pokemon -POST- (http://localhost:3000/pokemon):

  {
    "name": "",
    "type": "",
    "level": "",
}

5. El resultado al ver -GET- (http://localhost:3000/pokemon):
El nombre del usuario se encuntra asociado al pokemon creado

{
        "_id": "6763768c47672cd3e2169a17",
        "name": "pikachu-adams",
        "type": "efectos",
        "level": 60,
        "trainerId": {
            "_id": "6763760f47672cd3e2169a14",
            "username": "adams"
        },
        "createdAt": "2024-12-19T01:27:40.703Z",
        "updatedAt": "2024-12-19T01:27:40.703Z",
        "__v": 0
    }
