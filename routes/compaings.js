var express = require ('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://papapin:123456@ds159998.mlab.com:59998/voit-app', ['ecampaign']);


//Get all tasks
router.get('/', function(req, res, next){

  var token = 'fdshgsdhglsdgsdgjosdgjsdg';

  headers = req.headers;

  if( headers && headers.authorization ) {
    var t = req.headers.authorization;

    if(token == t) {

      db.tasks.find(function(err, tasks){
        if(err){
          res.send(err);
        } else {

          db.ecampaign.find(function(err, ecampaign){
            if(err){
              res.send(err);
            } res.json(ecampaign);
          });

        }
      });


    } else {
      return res.status(403).send({succes: false, msg: ' token is not corect!'})
    }

  } else {
    return res.status(403).send({succes: false, msg: 'no token!'})
  }



})



module.exports = router;
