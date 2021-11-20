const mongoose = require('mongoose');


const connect =
    mongoose.connect('mongodb+srv://ezzedine:ezzedine2021@cluster0.bgctn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => console.log('Connexion à MongoDB réussie !'))
        .catch(() => console.log('Connexion à MongoDB échouée !'));



module.exports = connect