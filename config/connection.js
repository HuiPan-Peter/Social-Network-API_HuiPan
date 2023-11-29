const { connect, connection } = require('mongoose');

// Use Mongoose to connect local MongoDB
connect('mongodb://127.0.0.1:27017/socialNetworkDB');

// Export connection
module.exports = connection;