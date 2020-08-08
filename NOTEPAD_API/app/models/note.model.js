const mongoose = require("mongoose");
var noteschema = new mongoose.Schema({
    notename :{
        title: String,
        content: string
        },
        timestamps: {
          timestamps:true
        },
      

});
 module.exports  =  mongoose.model("note",noteschema);