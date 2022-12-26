import "../css/Add.css";
import { Link } from "react-router-dom";
import React from "react";
import { createBrowserHistory } from "history";

function AddCarApp() {
  function AddCar() {
    let year = document.getElementById("car-year");
    let brand = document.getElementById("car-brand");
    let body = document.getElementById("car-body");
    let fuel = document.getElementById("car-fuel");
    let drive_type = document.getElementById("car-drive");
    let gearbox = document.getElementById("car-gearbox");
    console.log("123123123123123")
    

    fetch("/api/addcar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: document.getElementById("car-name")?.value,
        image: document.getElementById("car-image")?.value,
        price: document.getElementById("car-price")?.value,
        probig: document.getElementById("car-probig")?.value,
        year: year.options[year.selectedIndex]?.text,
        brand: brand.options[brand.selectedIndex]?.text,
        body: body.options[body.selectedIndex]?.text,
        fuel: fuel.options[fuel.selectedIndex]?.text,
        drive_type: drive_type.options[drive_type.selectedIndex]?.text,
        gearbox: gearbox.options[gearbox.selectedIndex]?.text,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }
  return (
    <div className="page">
      <div className="form">
        <Link id="close-img" to="/" draggable="false">
        </Link>
        <h1>Add Car</h1>
        <div className="add-fields">
          <div className="add-field">
            <label>NAME</label>
            <input type="text" id="car-name"></input>
          </div>
          <div className="add-field">
            <label>IMAGE</label>
            <input type="text" id="car-image"></input>
          </div>
          <div className="add-field">
            <label>PRICE $</label>
            <input type="number" id="car-price"></input>
          </div>
          <div className="add-field">
            <label className="form-label">PROBIG</label>
            <input type="number" id="car-prob"></input>
          </div>
          <div className="add-field">
            <label className="form-label">YEAR</label>
            <select name="years" className="add-inp" id="car-year">
              <option selected disabled value="" hidden="hidden"></option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2021">2020</option>
              <option value="2021">2019</option>
            </select>
          </div>
          <div className="add-field">
            <label className="form-label">BRAND</label>
            <select name="years" className="add-inp" id="car-brand">
              <option selected disabled value="" hidden="hidden"></option>
              <option value="Audi">Audi</option>
              <option value="BMW">BMW</option>
            </select>
          </div>
          <div className="add-field">
            <label className="form-label">TYPE BODY</label>
            <select name="years" className="add-inp" id="car-body">
              <option selected disabled value="" hidden="hidden"></option>
              <option>HitBack</option>
              <option>Sedan</option>
            </select>
          </div>
          <div className="add-field">
            <label className="form-label">TYPE FUEL</label>
            <select name="years" className="add-inp" id="car-fuel">
              <option selected disabled value="" hidden="hidden"></option>
              <option>Fuel</option>
              <option>Diesel</option>
            </select>
          </div>
          <div className="add-field">
            <label className="form-label">TYPE OF DRIVE</label>
            <select name="years" className="add-inp" id="car-drive">
              <option selected disabled value="" hidden="hidden"></option>
              <option>Front</option>
              <option>Back</option>
            </select>
          </div>
          <div className="add-field">
            <label className="form-label">GEARBOX</label>
            <select name="years" className="add-inp" id="car-gearbox">
              <option selected disabled value="" hidden="hidden"></option>
              <option>Auto</option>
              <option>Mechanic</option>
            </select>
          </div>
        </div>
        <button id="add-btn" onClick={AddCar}>
          ДОДАТИ
        </button>
      </div>
    </div>
  );
}

export default AddCarApp;
