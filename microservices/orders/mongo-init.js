var mongoDB = 'mongodb://username:password@localhost:27017';

const mongoose = require('mongoose');
mongoose.connect(mongoDB, { 
     useNewUrlParser: true,
     dbName: 'mongo-db' 
}).then(() => {
     console.log('Connection successful!');
}).catch((e) => {
     console.log('Connection failed!');
})