const mongoose = require('mongoose');

const PokemonSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true,
    trim: true 
  },
  type: { 
    type: String, 
    required: true,
    trim: true 
  },
  level: { 
    type: Number, 
    required: true,
    min: 1,
    max: 100 
  },
  trainerId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    required: true 
  }
}, { timestamps: true });

module.exports = mongoose.model('Pokemon', PokemonSchema);