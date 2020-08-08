//const connection = require("./model");
const mongoose = require("mongoose");
require('dotenv/config');
const express = require("express");
const application = express();
const path = require("path");
const expresshandlebars = require("express-handlebars");
const bodyparser = require("body-parser");

application.get("/",(req,res) =>
{
   res.json({"message": "this is notepad"});
   
})
require('./app/routes/note.routes.js');
mongoose.connect(process.env.DB_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => console.log('connected to db'));
application.listen("3000",()=>
{
    console.log("server started");
});

