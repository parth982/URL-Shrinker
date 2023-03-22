const mongoose =require('mongoose');

const connnectDB = (URL) =>{
    return mongoose.connect(URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = connnectDB;