const CarModel = require("../models/CarModel");
async function CarRouter(app){
app.post('/api/addcar',async(req,res)=>{
  
    
    const {
        name,
        image,
        price,
        probig,
        year,
        brand,
        body,
        fuel,
        drive_type,
        gearbox,
       
    } = req.body;
      console.log(Brand);

    const car=new CarModel({
        name:name,
        image:image,
        price:price,
        probig:probig,
        year:year,
        brand:brand,
        body:body,
        fuel:fuel,
        drive_type:drive_type,
        gearbox:gearbox,
    

    })
    await car.save();
})  
}
module.exports={CarRouter};




// carRouter.post("/api/add", async (req, res) => {
//     let name="Huy";
//     let image="GAvno";
//     let price="Ebanina";
//     let probig="Nanavizu";
//     let year="Ebaniy";
//     let brand="Web";
//     let body="Suka";
//     let fuel="Idet vse v pizdy";
//     let drive_type="hh";
//     let gearbox="asdadad";
// //   const {
// //     name,
// //     image,
// //     price,
// //     probig,
// //     year,
// //     brand,
// //     body,
// //     fuel,
// //     drive_type,
// //     gearbox,
// //   } = req.body;
//   var car = new Cars.Car({
//     name: name,
//     image: image,
//     price: price,
//     probig: probig,
//     year: year,
//     brand: brand,
//     body: body,
//     fuel: fuel,
//     drive_type: drive_type,
//     gearbox: gearbox,
//   });
//   await car
//     .save()
//     .then(() => {
//       res.json({ isAdded: true });
//     })
//     .catch((err) => {
//       if (err) {
//         res.status(400).json({ error: err });
//       }
//     });
// });

// module.exports = carRouter;
