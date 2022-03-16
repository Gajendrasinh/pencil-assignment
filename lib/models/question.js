const mongo = require('mongoose');
const Schema = mongo.Schema;
const dbClient = require('../database');


const questionModel = new Schema({
    name: {
        type: Schema.Types.String,
        default: ''
    }, 
    Annotations : {
        type: Schema.Types.String,
        default: ''
    },
    createdAt: {
        type: Schema.Types.Date,
        default: '',
        required: true
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        default: '',
        ref: 'User'
    },
    isDeleted: {
        type: Schema.Types.Boolean,
        default: false
    }
});

const Question = dbClient.model('Question', questionModel);

module.exports = Question;