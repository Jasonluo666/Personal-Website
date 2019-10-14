const MongoClient = require( 'mongodb' ).MongoClient;
const url = "mongodb+srv://demo:demo@demodb-srg2r.mongodb.net/DemoDB?retryWrites=true&w=majority";

var _client;

module.exports = {

  connectToServer: function( callback ) {
    MongoClient.connect( url,  { useNewUrlParser: true }, function( err, client ) {
      _client  = client;
      return callback( err );
    } );
  },

  getClient: function() {
    return _client;
  }
};