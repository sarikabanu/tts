
var synthesize = require('./tts');

function login() {

 this.textToSpeach = function (req, res) {
                 console.log('route1')
  synthesize.Synthesize(function(error,result){
      
        if(error){
            res.send({error:error}); 
        }   
        else{
            res.send({result:result});
        }
            
     })
   
 }
}

module.exports = new login();