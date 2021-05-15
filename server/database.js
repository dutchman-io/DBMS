const mongoose =require('mongoose');
 mongoose.connect('mongodb://localhost/admin', { useNewUrlParser: true , useUnifiedTopology: true });

 mongoose.connection.once('open', function(){
    console.log('Connection successfull!');

}).on('error', function(error){
    console.log('Connection Error: ', error);
});