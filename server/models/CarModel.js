// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// const CarScheme = new Schema({
//     name: String,
//     image: String,
//     price: Number,
//     probig: Number,
//     year: Number,
//     brand: String,
//     body: String,
//     fuel: String,
//     drive_type: String,
//     gearbox: String,
//   });
  
//   const Car = mongoose.model("cars", CarScheme);
  
//   module.exports = {
//     Car,
//   };

  const { Schema, model } = require("mongoose");

const CarScheme = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: String, required: true },
  probig: { type: String, required: true },
  year: { type: String, required: true },
  brand: { type: String, required: true },
  body: { type: String, required: true },
  fuel: { type: String, required: true },
  drive_type: { type: String, required: true },
  gearbox: { type: String, required: true },
 
});


module.exports = model('Car', CarScheme);
  