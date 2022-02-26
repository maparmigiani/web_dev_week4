let express = require('express');
let mongoose = require('mongoose');
let router = express.Router();

let Information = require('../models/informations');

//Get request for the information
router.get('/', (req, res, next) => {
    Information.find((err, informationList)=> {
        if(err){
            return console.error(err);
        }else{
            //console.log(informationList);
            res.render('information',{title: 'Business Contacts List View',InformationList : informationList});
        }
    });
  });

  module.exports = router;