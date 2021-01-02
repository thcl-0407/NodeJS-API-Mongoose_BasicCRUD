const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/DemoMongoose', { useNewUrlParser: true }, (err) => {
    if(!err){
        console.log('Connect to Database Successfully')
    }else{
        console.log('Failed to connect with Database')
    }
});