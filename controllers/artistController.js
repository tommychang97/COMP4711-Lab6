let artistModel = require('../models/artistData');
exports.getArtistsPage = (req,res,next) => {
       let Artists = artistModel.getAll();
       Artists.then((data) => {
            res.render('home', {artists:data.rows});
       }).catch(function(error) {
         console.log(error);
      })       
   };
exports.addArtist = (req,res,next) => {
   let name = req.body.name;
   let image = req.body.image;
   let description = req.body.description;
   let artistObject = {
      name: name,
      description: description,
      image: image
   }
   let addArtistResults = artistModel.add(artistObject);
   addArtistResults.then(() => {
      let Artists = artistModel.getAll();
      Artists.then((data) => {
           res.render('home', {artists:data.rows});
      }).catch(function(error) {
         console.log(error);
      })      
   }); 
}
exports.deleteArtist = (req,res,next) => {
   let id = req.params.id;
   let deleteArtistResults = artistModel.delete(id);
   deleteArtistResults.then(() => {
      let Artists = artistModel.getAll();
      Artists.then((data) => {
           res.render('home', {artists:data.rows});
      }).catch(function(error) {
         console.log(error);
      })      
   }); 
}

exports.getSearchedArtists = (req,res,next) => {
   let searchedName = req.query.search;
   if (searchedName == "") {
      let Artists = artistModel.getAll();
       Artists.then((data) => {
            res.render('home', {artists:data.rows});
       }).catch(function(error) {
         console.log(error);
      })   
       return;    
   }
   let searchedArtists = artistModel.search(searchedName);
   searchedArtists.then((data) => {
      res.render('home', {artists:data.rows});
   }).catch(function(error) {
      console.log(error);
   })       
}
