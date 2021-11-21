const User = require('../modeles/userModele')


exports.getUser = (req, res, next) => {
    User.find()
        .then(user => res.status(200).json(user))
        .catch(error => res.status(400).json({ error }));
}

exports.deleteUser = (req, res, next) => {
    User.findOne({ _id: req.params.id })
        .then(User => {
            User.deleteOne({ _id: req.params.id })
                .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};
exports.modifyUser = (req, res, next) => {
    User.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then((result) => res.status(200).json(result))
        .catch(error => res.status(400).json({ error }));
}
exports.getOneUser = (req, res, next) => {
    User.findOne({ _id: req.params.id })
        .then(users => res.status(200).json(users))
        .catch(error => res.status(404).json({ error }));
}

