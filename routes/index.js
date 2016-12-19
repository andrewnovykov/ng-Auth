var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://papapin:123456@ds157247.mlab.com:57247/mytasklist_dron', ['task']);

router.get('/', function(req, res, next){

    var token = 'fdshgsdhglsdgsdgjosdgjsdg';

    headers = req.headers;

    if( headers && headers.authorization ) {
      var t = req.headers.authorization;

      if(token == t) {

        db.tasks.find(function(err, tasks){
          if(err){
            res.send(err);
          } res.json(tasks);
        });


      } else {
        return res.status(403).send({succes: false, msg: ' token is not corect!'})
      }

    } else {
      return res.status(403).send({succes: false, msg: 'no token!'})
    }




});

module.exports = router;
