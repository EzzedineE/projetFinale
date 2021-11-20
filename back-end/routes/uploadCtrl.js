const express = require("express")
const router = express.Router();
const uploadCtrl = require('../controlors/uploads')

router.post('/single', uploadCtrl.uploadSingle);



module.exports = router