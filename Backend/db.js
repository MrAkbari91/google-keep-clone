const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017";

const connectToMongo = () => {
    mongoose.connect(mongoURI).then(() => console.log('Connected Successfully')).catch(error => console.log(error));
}



module.exports = connectToMongo;


// const mongoose = require('mongoose');

// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/test');

//   // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
// }