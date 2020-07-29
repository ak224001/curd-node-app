const uri = "mongodb+srv://root:eQKEPijZUFyaj72@cluster0.cudk9.mongodb.net/StoreData?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";

const mongoose = require("mongoose");

mongoose.connect(uri, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
}, (err) => {
    if (!err) {
        console.log('Successfully connected!')
    }
});

require('./employee.model')