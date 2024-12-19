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
        "_id": "",
        "name": "",
        "type": "",
        "level": ,
        "trainerId": {
            "_id": "",
            "username": ""
        },
        "createdAt": "",
        "updatedAt": "",
        "__v": 0
    }
