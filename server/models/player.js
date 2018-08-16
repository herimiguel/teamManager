var mongoose = require('mongoose');

var PlayerSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true, 
        minlength: 2
    }, 
    pref_pos: {
        type: String, 
        required: false,
    },
    game_one: {
        type: String, 
        required: true,
    },
    game_two: {
        type: String, 
        required: true,
    },
    game_three: {
        type: String, 
        required: true,
    },
}, {timestamps: true});

mongoose.model('Player', PlayerSchema);