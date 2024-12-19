const express = require('express');
const {
  listPokemons,
  getPokemonById,
  getMyPokemons,
  createPokemon,
  updatePokemon,
  deletePokemon
} = require('../controllers/pokemonController');
const authMiddleware = require('../middleware/authMiddleware');
const { validatePokemon } = require('../middleware/validationMiddleware');

const router = express.Router();

router.get('/', listPokemons);
router.get('/:id', getPokemonById);
router.get('/trainer/mypokemons', authMiddleware, getMyPokemons);
router.post('/', authMiddleware, validatePokemon, createPokemon);
router.put('/:id', authMiddleware, validatePokemon, updatePokemon);
router.delete('/:id', authMiddleware, deletePokemon);

module.exports = router;