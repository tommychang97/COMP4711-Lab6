const artistController = require('../controllers/artistController');
let artistModel = require('../models/artistData');

exports.getLoginPage = (req,res,next) => {
    console.log("hit login page");
    res.render('login', {pageTitle: 'Lab 6', loginCSS: true});
 };

 exports.getArtistsPage = (req,res,next) => {
    console.log("hit artists page");
    var username = req.body.username.toLowerCase();
    var password = req.body.password.toLowerCase();
    if (username != "a01046371" || password != "password") {
        res.render('login', {pageTitle: 'Lab 6', loginCSS: true});

    }
    else {
        let Artists = artistModel.getAll();
        Artists.then((data) => {
             console.log(data);
             res.render('home', {artists:data.rows});
        })    
    }
 };