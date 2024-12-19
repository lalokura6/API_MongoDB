const Pokemon = require('../models/Pokemon');

const listPokemons = async (req, res) => {
  try {
    const pokemons = await Pokemon.find().populate('trainerId', 'username');
    res.json(pokemons);
  } catch (error) {
    res.status(500).json({ error: 'Error listando pokemones' });
  }
};

const getPokemonById = async (req, res) => {
  try {
    const pokemon = await Pokemon.findById(req.params.id).populate('trainerId', 'username');
    if (!pokemon) {
      return res.status(404).json({ error: 'Pokemon no encontrado' });
    }
    res.json(pokemon);
  } catch (error) {
    res.status(500).json({ error: 'Error obteniendo pokemon' });
  }
};

const getMyPokemons = async (req, res) => {
  try {
    const pokemons = await Pokemon.find({ trainerId: req.user._id });
    res.json(pokemons);
  } catch (error) {
    res.status(500).json({ error: 'Error obteniendo tus pokemones' });
  }
};

const createPokemon = async (req, res) => {
  try {
    const pokemon = new Pokemon({
      ...req.body,
      trainerId: req.user._id
    });
    await pokemon.save();
    res.status(201).json(pokemon);
  } catch (error) {
    res.status(500).json({ error: 'Error creando pokemon' });
  }
};

const updatePokemon = async (req, res) => {
  try {
    const pokemon = await Pokemon.findOneAndUpdate(
      { _id: req.params.id, trainerId: req.user._id },
      req.body,
      { new: true }
    );

    if (!pokemon) {
      return res.status(404).json({ error: 'Pokemon no encontrado o no autorizado' });
    }

    res.json(pokemon);
  } catch (error) {
    res.status(500).json({ error: 'Error actualizando pokemon' });
  }
};

const deletePokemon = async (req, res) => {
  try {
    const pokemon = await Pokemon.findOneAndDelete({ 
      _id: req.params.id, 
      trainerId: req.user._id 
    });

    if (!pokemon) {
      return res.status(404).json({ error: 'Pokemon no encontrado o no autorizado' });
    }

    res.json({ message: 'Pokemon eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error eliminando pokemon' });
  }
};

module.exports = {
  listPokemons,
  getPokemonById,
  getMyPokemons,
  createPokemon,
  updatePokemon,
  deletePokemon
};