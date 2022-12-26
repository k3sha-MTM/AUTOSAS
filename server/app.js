const express=require ('express');
const app= express();
const CarModel = require('./models/CarModel');
const { CarRouter } = require('./routes/CarRouter');
const mongoose = require('mongoose');
// Connection URI
const uri ="mongodb+srv://admin:RJQQzuw76uTOZoIa@cluster0.dphmrco.mongodb.net/test";
// Create a new MongoClient
app.use(express.json());
async function run() {
  CarRouter(app);
  try {
    await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
       
    })
    mongoose.set('strictQuery', true);
    app.listen(3001, () => {
        console.log(`Server is working now on port ${3001}`);
    });
}
catch (e) {
    console.log(e.message);
}
}
run();



// app.get('/', (req, res) => {
//     res.send(Car);
// });
