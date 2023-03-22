const express = require('express');
const connnectDB = require('./DB/connectDB');
const app = express();
require('dotenv').config();

const router = require('./routes/url_routes');

app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');

app.use('/',router);

const port = process.env.PORT || 2003;

const start = async ()=>{
    try{
        await connnectDB(process.env.MONGO_URI);
        console.log('Database Connected')
        app.listen(port,console.log(`Listening on Port ${port}..`));
    }catch(err){
        console.log('Couldnt Connect To DB hence didnt Start Server');
    }
};
start();