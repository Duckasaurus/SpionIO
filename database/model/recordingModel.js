const mongoose = require("mongoose");
mongoose.Promise = require('bluebird');
const Schema = mongoose.Schema;

const recordingSchema = Schema({
    _id:String,
    Frame: [{
        event: String,
        ClickX: Number,
        ClickY: Number,
        scrollTop: Number,
        scrollLeft: Number,
        target: String,
        targetValue: String,
        targetKeyCode: String,
        time: Number
    }],
    width:Number,
    height:Number,
    htmlCopy: String,
    startTime: Number,
})

let Recording = mongoose.model('Recording', recordingSchema, 'Recordings');

module.exports = Recording;