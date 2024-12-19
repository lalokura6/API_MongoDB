const User = require('../models/User');
const { generateToken } = require('../config/jwt');

const register = async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: 'Usuario ya existe' });
    }

    const user = new User({ username, password });
    await user.save();

    const token = generateToken(user);
    res.status(201).json({ token, userId: user._id });
  } catch (error) {
    res.status(500).json({ error: 'Error en registro' });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const token = generateToken(user);
    res.json({ token, userId: user._id });
  } catch (error) {
    res.status(500).json({ error: 'Error en login' });
  }
};

module.exports = { register, login };