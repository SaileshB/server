const Authenitication = require('./controllers/authentication');
module.exports = function (app) {
    // app.get('/', function (req, res, next) {
    //     res.send(['lime', 'vodka', 'sprite']);
    // });
    app.post('/signup',Authenitication.signup);
};