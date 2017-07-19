const Authenitication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');


const requireAuth = passport.authenticate('jwt', {session: false});


module.exports = function (app) {
    // app.get('/', function (req, res, next) {
    //     res.send(['lime', 'vodka', 'sprite']);
    // });
    app.get('/', requireAuth, function (req, res) {
        res.send({hi: 'there'});
    });

    app.post('/signup', Authenitication.signup);
};