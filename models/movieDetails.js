var mongoose=require("mongoose");
var MovieSchema=mongoose.Schema({
     Title:String,
     Year:String,
     Released:String,
     Director:String,
     Actors:String,
     Plot:String,
     Language:String,
     Country:String,
     Awards:String,
     Poster:String,
    imdbRating:String

});
module.exports=mongoose.model('movie',MovieSchema,'movie');
