var express = require('express');
var router = express.Router();
// var mongojs = require('mongojs');
// var db = mongojs('mongodb://papapin:123456@ds157247.mlab.com:57247/mytasklist_dron', ['user']);

router.use(function getUser(req, res, next) {
    next();
});

router.post('/', function(req, res, next){

  var token = 'fdshgsdhglsdgsdgjosdgjsdg';

  var User =
    {
      login: 'papapin',
      password: '123456',
      role: 'admin',
      token: token,
      comparePass: function( password ){
        if(this.password == password) {
          return user = {
            login: this.login,
            role: this.role,
            token: this.token
          }
        }
      }
  }

  login = req.body.login;
  password = req.body.password;

  if(!login && !password ){
    return res.status(403).send({succes: false, msg: 'Введите login & password'})
  }

  if(!login) {
    return res.status(403).send({succes: false, msg: 'Введите логин'})
  } else {

    if(login != User.login ) {
      return res.status(403).send({succes: false, msg: 'Не коректный login  '})
    }

    if( !password ) {
      return res.status(403).send({succes: false, msg: 'Введите password'})
    } else {

      if( password != User.password ) {
        return res.status(403).send({succes: false, msg: 'Не коректный password'})
      } else {
        var user = User.comparePass( password );
        res.send({succes: true}).json( user );
      }
    }
  }

});

router.get('/', function(req, res, next){
    return res.status(403).send({succes: false, msg: 'Доступ запрещен!'})
})

module.exports = router;
