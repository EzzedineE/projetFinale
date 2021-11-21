const Quizz = require('../modeles/quizzModele')

exports.createQuizz = (req, res, next) => {
    delete req.body._id;
    const quizz = new Quizz({
        ...req.body
    });
    quizz.save()
        .then((result) => res.status(201).json(result))
        .catch(error => res.status(400).json({ error }));
}
exports.modifyQuizz = (req, res, next) => {
    Quizz.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then((result) => res.status(200).json(result))
        .catch(error => res.status(400).json({ error }));
}
exports.deleteQuizz = (req, res, next) => {
    Quizz.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json(resu))
        .catch(error => res.status(400).json({ error }));
}
exports.getOneQuizz = (req, res, next) => {
    Quizz.findOne({ _id: req.params.id })
        .then(quizzs => res.status(200).json(quizzs))
        .catch(error => res.status(404).json({ error }));
}
exports.getAllQuizz = (req, res, next) => {
    Quizz.find()
        .then(quizzs => res.status(200).json(quizzs))
        .catch(error => res.status(400).json({ error }));
}