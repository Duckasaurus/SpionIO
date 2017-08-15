const Recording = require('./../model/recordingModel.js')
const recordingController = {};


recordingController.createRecording = (data) => {
    return Recording.create(data)
};

recordingController.findRecording = (req, res, next) => {
    console.log("params",req.params)
    Recording.findOne({_id:req.params.recordingID},(err, response) => {
        if (err) res.send(err)
        else {
            res.send(response);
        }
    })
}

recordingController.findAll = (req, res, next) => {
    Recording.find((err, response) => {
        if (err) res.send(err)
        else res.send(response);
    })
}

recordingController.updateRecordingBulk = (id, Data) => {
    let bulk = Recording.collection.initializeOrderedBulkOp();Data.forEach(function(element) {
        bulk.find({'_id':id}).update({$push:element})        
    });
    return bulk.execute()
}

recordingController.deleteRecording = (id) => {
    return Recording.findByIdAndRemove(id)
}


module.exports = recordingController;
