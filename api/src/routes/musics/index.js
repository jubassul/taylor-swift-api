
const { Router } = require("express");

const router = Router();
const musicController = require('../../controllers/music.controllers')
router.get('/listMusicsTaylor', musicController.listErasMusics )
router.get('/listTop10', musicController.listTopMusics )
module.exports = router;
