var login = require('./controller');


module.exports = {
    configure: function (app) {
        app.post('/user/:action', function (req, res) {
            console.log('route')
            if (req.params.action == 'textToSpeach') {
                login.textToSpeach(req.body, res);
            }
            
        });
    }
};