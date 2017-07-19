const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

//setup options for JWT Stragety
const jwtOptions = {};

//create jwt stragety
const jwtLogin = new JwtStrategy(jwtOptions,function (payload,done) {

});
