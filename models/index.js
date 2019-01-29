// Require needed Modules
const mongoose = require('mongoose');

// Connect to mongod
// Note: process.env used to preset default URL mongod provides
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/hunters', { useNewUrlParser: true });

// Include and export all models in this folder
// Note: Include additional database as needed in the below format
module.exports.Bounty = require('./bounty');
