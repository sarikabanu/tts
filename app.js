var express = require('express');
var bodyParser = require('body-parser');
require('./config/global');
// connection = require('./config/connection');




var app = express();
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

router = express.Router();
_Routes.user.configure(app);





var server = app.listen(process.env.PORT || 30, function() {
  console.log('Server listening on port ' + server.address().port);
});


