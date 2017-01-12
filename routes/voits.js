var express = require ('express');
var router = express.Router();
const url = require('url');
var mongojs = require('mongojs');
var db = mongojs('mongodb://papapin:123456@ds159998.mlab.com:59998/voit-app', ['voits']);

var dbc = mongojs('mongodb://papapin:123456@ds159998.mlab.com:59998/voit-app', ['ecampaign']);


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

            db.voits.find(function(err, voits){
              if(err){
                res.send(err);
              } res.json(voits);
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


//Save task
router.get('/voit',function(req, res, next){


  var parts = url.parse( req.url, true )

  //console.log(parts);

  var voit = {
    campaing: parts.query['campaing'],
    email: parts.query['email'],
    rating: parts.query['rating']

  }

  dbc.ecampaign.findOne({title: voit.campaing }, function(err, ecampaign){
    if(err || ecampaign === null ){
      res.json({
        "error": "Bad campaing title"
      })
    } else {

      if(!voit.campaing || !voit.email){
        res.status(400);
        res.json({
          "error": "Bad data"
        })
      } else {
        db.voits.save(voit , function(err, voit) {
          if(err){
            res.send(err);
          } res.json({
            "message": "Спасибо за ваш отзыв!"
          })
        });
      }

    }






  });



})




module.exports = router;
