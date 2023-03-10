import "../css/Reg.css";
import InputMask from "react-input-mask";
import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import { createBrowserHistory } from "history";

function RegisterApp() {
  const [phone, setPhone] = useState("");
  const handleInput = ({ target: { value } }) => setPhone(value);
  const history = createBrowserHistory({ forceRefresh: true });
  const dataFetchedRef = React.useRef(false);
  React.useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;

    fetch("/api/profile")
      .then((res) => res.json())
      .then((data) => {
        if (data.isLogin) {
          history.push("/");
          history.go();
        }
      });
  }, []);
  function Register() {
    fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: document.getElementById("user-name").value,
        surname: document.getElementById("user-surname").value,
        patronymic: document.getElementById("user-patronymic").value,
        email: document.getElementById("user-email").value,
        phone: phone,
        password: document.getElementById("user-password").value,
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
        
      
        <h1>Реєстрація</h1>
        <div className="fields">
          <label className="form-label">Ім'я</label>
          <input type="text" id="user-name"></input>
          <label className="form-label">Прізвище</label>
          <input type="text" id="user-surname"></input>
          <label className="form-label">По батькові</label>
          <input type="text" id="user-patronymic"></input>
          <label className="form-label">Електронна пошта</label>
          <input type="email" id="user-email"></input>
          <label className="form-label">Телефон</label>
          <PhoneInput value={phone} onChange={handleInput}></PhoneInput>
          <label className="form-label">Пароль</label>
          <input type="password" id="user-password"></input>
        </div>
        <a href="http://localhost:3002" class="gradient-button-autor" >ЗАРЕЄСТРУВАТИСЯ</a>
        
      </div>
    </div>
  );
}
function PhoneInput(props) {
  return (
    <InputMask
      mask="+38(00)100-11-90"
      value={props.value}
      onChange={props.onChange}
    ></InputMask>
  );
}

export default RegisterApp;
