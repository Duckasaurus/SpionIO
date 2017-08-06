const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Site = require('./sitesModel.js');

const clientSchema = Schema({
    local: {
        email: String,
        password: String
    },
    siteID: [{type:Schema.Types.ObjectId, ref:'Site'}]
});



let Client = mongoose.model('Client', clientSchema,'Clients');

module.exports = Client;