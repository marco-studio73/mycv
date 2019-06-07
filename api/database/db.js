const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://marc:msuar@cluster0-kyy4m.gcp.mongodb.net/mycv?retryWrites=true', { 
        useNewUrlParser: true,
        useCreateIndex: true
})
        .then( () => console.log('connexion db ok !'))
        .catch( err => console.log(err));