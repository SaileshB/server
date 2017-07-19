const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');


//Define a model
const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        lower: true
    },
    password: String
});

//on save hook, encrypt password

//run this function before saving model
userSchema.pre('save', function (next) {
    //get access to the user model
    const user = this;

    //generate salt then run callback
    bcrypt.genSalt(10, function (err, salt) {
        if (err) {
            return next(err);
        }
        //hash (encrypt) the password using salt
        bcrypt.hash(user.password, salt, null, function (err, hash) {
            if (err) {
                return next(err);
            }
            //overwrite plain text password with encripted password
            user.password = hash;
            next();
        });
    });
});

//create the model class
const ModelClass = mongoose.model('user', userSchema);

//export the model
module.exports = ModelClass;