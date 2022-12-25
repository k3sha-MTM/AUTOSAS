const express=require ('express');
const app= express();
app.listen(3000,()=>{console.log("Gavno rabotaet")});
const PORT = process.env.PORT || 3001;

app.listen(PORT, () =>
{
    console.log(`SERVER START ${PORT}`);
});
const { MongoClient } = require("mongodb");

// Connection URI
const uri ="mongodb+srv://admin:RJQQzuw76uTOZoIa@cluster0.dphmrco.mongodb.net/test";

// Create a new MongoClient
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    // Establish and verify connection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to server");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}




MongoClient.connect(uri, function(err, db) {
  if (err) throw err;
  var dbo = db.db("REACTCAR");
  var myobj = { Car: "Subaru Outback 2018, Автомат", Sale: "612 000 грн",
        Graduation_year: "2018", Run: "126 907 км",
        bodyType: "Crossover", Number_of_seats: "5",
        Fuel_type: "Gas/Petrol", Engine_capacity: "2499",
        Engine_power: "175", Drive_type: "Full",
        Gearbox_type: "Gearbox type"};
  dbo.collection("PRODUCT").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
run().catch(console.dir);