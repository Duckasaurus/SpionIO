const Click = require('./../model/clickModel.js')
const clickController = {};
var jwt = require('jsonwebtoken');
const secret = "cats"


clickController.updateClick = (data) => {
    let sessionID = jwt.verify(data.token, secret);
    return Site.findOne({_id:sessionID},(err,foundSession)=>{
        if(err) throw err;
        Click.findOne({_id:foundSession.clickID},(err,foundClick) =>{
            if(err) throw err;
            foundClick.clickX.push(data.clickX),
            foundClick.clickY.push(data.clickY),
            foundClick.documentWidth.push(data.documentWidth),
            foundClick.documentHeight.push(data.documentHeight),
            foundClick.windowWidth.push(data.windowWidth),
            foundClick.windowHeigth.push(data.windowHeight)
            foundClick.save((err,response) =>{
                if(err) throw err
                return response
            })
        })
    }) 
}
module.exports = clickController;