const CarModel = require("../models/CarModel");
async function CarRouter(app){
app.get('/api/addcar',async(req,res)=>{
    console.log("12312312312123131231323123213123123213123123123");
    // const {
        
    //     name,
    //     image,
    //     price,
    //     probig,
    //     year,
    //     brand,
    //     body,
    //     fuel,
    //     drive_type,
    //     gearbox,
       
    // } = req.body;
    let name="Mersc";
    let image="https://www.mercedes-benz.ru/passengercars/the-brand/jumper-page/design-concept-car/_jcr_content/contentgallerycontainer/par/contentgallery/par/contentgallerytile/image.MQ6.8.20210414130909.jpeg";
    let price="2300$";
    let probig="200 907 км";
    let year="2000";
    let brand="Кросовер";
    let body="Кросовер";
    let fuel="Газ";
    let drive_type="Повний";
    let gearbox="Автомат";

    
    
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
    let name="Huy";
    let image="GAvno";
    let price="Ebanina";
    let probig="Nanavizu";
    let year="Ebaniy";
    let brand="Web";
    let body="Suka";
    let fuel="Idet vse v pizdy";
    let drive_type="hh";
    let gearbox="asdadad";
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
