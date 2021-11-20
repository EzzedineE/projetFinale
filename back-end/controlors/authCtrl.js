const User = require('../modeles/userModele')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const multer = require("multer")
const path = require('path')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {

        // Uploads is the Upload_folder_name
        cb(null, "uploads")
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '_' + file.originalname)
    }
})
var upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {

        // Set the filetypes, it is optional
        var filetypes = /jpeg|jpg|png/;
        var mimetype = filetypes.test(file.mimetype);

        var extname = filetypes.test(path.extname(
            file.originalname).toLowerCase());

        if (mimetype && extname) {
            return cb(null, true);
        }

        cb("Error: File upload only supports the "
            + "following filetypes - " + filetypes);
    }

    // mypic is the name of file attribute
})

exports.register = async (req, res, next) => {
    console.log(req.body);
    User.findOne({ email: req.body.email })
        .then((userRes) => {
            if (userRes == null) {
                bcrypt.hash(req.body.password, 10)
                    .then(hash => {
                        const userBody = req.body
                        console.log(userBody);
                        const fonc = upload.single("image");
                        fonc(req, result, function (err) {

                            if (err) {
                                res.status(500).json(err)
                            }
                            else {
                                console.log("result : ", result);
                                res.status(201).json("Success, Image uploaded!")
                            }
                        })
                        const user = new User({ ...userBody, password: hash })
                        console.log(user);
                        user.save()
                            .then(() => res.status(201).json(user))
                            .catch(error => res.status(400).json({ error }))
                    })
                    .catch(error => res.status(500).json({ error }))
            } else {
                res.status(404).json({ msg: "email existant" })
            }

        })
        .catch((err) => { res.status(500).json(err) })

}
exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: 'Utilisateur non trouver' });
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'mot de passe incorecte' })
                    }
                    res.status(200).json(
                        {
                            user,
                            token: jwt.sign(
                                { userId: user._id },
                                process.env.TOKEN_SECRET,
                                { expiresIn: '24h' }
                            )
                        }
                    )

                })
                .catch(error => res.status(500).json({ error }));

        })
        .catch(error => res.status(500).json({ error }))

}
