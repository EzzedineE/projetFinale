const express = require("express")
const router = express.Router();
const authCtrl = require('../controlors/authCtrl')
const upload = require('../config/multer')



router.post('/register', upload.single("image"), authCtrl.register);
router.post('/login', authCtrl.login);




module.exports = router