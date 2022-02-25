var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/home', function(req, res, next) {
  res.render('home.ejs', { title: 'Home' });
});
router.get('/services', function(req, res, next) {
  res.render('services.ejs', { title: 'Service' });
});

router.get('/about', function(req, res, next) {
  res.render('about.ejs', { title: 'About' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects.ejs', { title: 'Projects' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact.ejs', { title: 'Contact' });
});



module.exports = router;
