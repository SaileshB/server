const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

//create local strategy
const localOptions = {usernameField:'email'};
const localLogin = new LocalStrategy(localOptions, function (email, password, done) {
    //verify username,password call done with the user
    //if it is the correct username and password
    //otherwise cal done with false
});


//setup options for JWT Stragety
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
};

//create jwt strategy
const jwtLogin = new JwtStrategy(jwtOptions, function (payload, done) {
    //see if the userID in the payload exists in our database
    //if it does ,call 'done' with that order
    //otherwise , call done without a user object

    User.findById(payload.sub, function (err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            done(null, user);
        } else {
            done(null, false);
        }
    });
});


//tell passport to use these strategy
passport.use(jwtLogin);