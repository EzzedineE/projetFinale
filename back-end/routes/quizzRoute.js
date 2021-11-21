const express = require("express")
const router = express.Router();
const quizzfCtrl = require('../controlors/quizzCtrl')

router.post('/', quizzfCtrl.createQuizz);
router.delete('/:id', quizzfCtrl.deleteQuizz);
router.put('/:id', quizzfCtrl.modifyQuizz);
router.get('/:id', quizzfCtrl.getOneQuizz);
router.get('/', quizzfCtrl.getAllQuizz);


module.exports = router