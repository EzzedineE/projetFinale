const express = require("express")
const router = express.Router();
const user = require('../controlors/userCtrl')



router.get('/getUser', user.getUser);
router.delete('/:id', user.deleteUser);
router.put('/:id', user.modifyUser);
router.get('/:id', user.getOneUser);


module.exports = router