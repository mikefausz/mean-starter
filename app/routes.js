var express        = require('express');
// grab the album model
var Album          = require('./models/album.js');

    module.exports = function(app) {

        // server routes ===========================================================
        // handle things like api calls
        // authentication routes

        // ROUTES FOR OUR API
        // =============================================================================
        var router = express.Router();              // get an instance of the express Router

        // middleware to use for all requests
        router.use(function(req, res, next) {
          // do logging
          console.log('Something is happening.');
          next(); // make sure we go to the next routes and don't stop here
        });

        // test route to make sure everything is working (accessed at GET http://localhost:8080/api)
        router.get('/', function(req, res) {
          res.json({ message: 'hooray! welcome to our api!' });
        });

        // more routes for our API will happen here
        router.route('/albums')

          // create a album (accessed at POST http://localhost:8080/api/albums)
          .post(function(req, res) {

            var album = new Album();      // create a new instance of the album model
            album.name = req.body.name;  // set the albums name (comes from the request)

            // save the album and check for errors
            album.save(function(err) {

              if (err)
                res.send(err);

                res.json({ message: 'album created!' });
            });

          });

        // REGISTER OUR ROUTES -------------------------------
        // all of our routes will be prefixed with /api
        app.use('/api', router);

        // frontend routes =========================================================
        // route to handle all angular requests
        app.get('*', function(req, res) {
            res.sendfile('./public/views/index.html'); // load our public/index.html file
            // res.json({ message: 'hooray! welcome to our api!' });
        });

    };
