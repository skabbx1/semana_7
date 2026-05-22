const express = require('express');
const router = express.Router();
const auth = require('../controllers/authController');
const protect = require('../middlewares/auth');

router.post('/login', auth.login);
router.get('/privado', protect, (req, res) => res.send('Acceso permitido'));

module.exports = router;