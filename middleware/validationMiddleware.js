const { body, validationResult } = require('express-validator');

const validateRegister = [
  body('username')
    .isLength({ min: 3 }).withMessage('Username debe tener al menos 3 caracteres')
    .trim(),
  body('password')
    .isLength({ min: 6 }).withMessage('Password debe tener al menos 6 caracteres'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

const validatePokemon = [
  body('name')
    .isLength({ min: 2 }).withMessage('Nombre debe tener al menos 2 caracteres')
    .trim(),
  body('type')
    .isLength({ min: 2 }).withMessage('Tipo debe tener al menos 2 caracteres')
    .trim(),
  body('level')
    .isInt({ min: 1, max: 100 }).withMessage('Nivel debe estar entre 1 y 100'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = { validateRegister, validatePokemon };