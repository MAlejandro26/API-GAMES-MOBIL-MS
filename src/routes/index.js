const { Router } = require('express');
const router = Router();

const { welcome, getGames } = require('../controllers/controllers.js')

router.get('/', welcome);
router.get('/Games', getGames);

module.exports = router;