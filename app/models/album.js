// grab the mongoose module
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// define our album schema

var AlbumSchema  = new Schema({
    name: String
});

// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Album', AlbumSchema);
