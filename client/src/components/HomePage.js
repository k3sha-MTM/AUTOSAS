import "../css/Home.css";
import NavPanel from "./NavPanel";
import Nidi from "../images/nidi.png";

function HomeApp() {
  return (
    <div className="home-page">
      <a href="http://localhost:3002/register" class="gradient-button-autor" >Регистрация</a>
      <a href="http://localhost:3002/login" class="gradient-button-go">Войти</a>
      
        <img src={Nidi} href="http://localhost:3002" class="imagess"></img>
      
    
      <div className="main-content">
        <h1 className="main-header">МАШИНКИ</h1>
        <div class="header">
          <div class="text1">
          +38 (044) 503-33-53
          Замовити дзвінок
          </div>
          <hr></hr>
          <div class="text2">
          вул.Велика Кільцева, 58
          Карта проїзду
          </div>
          <hr></hr>
        </div>
        <div class="colorRect">
        <a href="" class="gradient-button-buy">Купити</a>
        <a href="http://localhost:3002/sell" class="gradient-button-sell">Додати</a>
        <a href="" class="gradient-button-info">Інформація</a>
        </div>
        <img src="https://phonoteka.org/uploads/posts/2021-07/1625490383_6-phonoteka-org-p-neonovie-mashini-na-rabochii-stol-krasivo-6.jpg" class="IMAGE"></img>
        <h2>ПЕРЕВАГИ РОБОТИ З НАМИ</h2>
        </div>
        <div class="container-text">

<div class="first-text">
<h2>Діагностика</h2>
<h5> Усі автомобілі перед прийманням проходять технічну діагностику на наших дилерських СТО</h5>
</div>

<div class="second-text">
<h2>Захист прав</h2>
<h5> Усі наші угоди проводяться офіційно, всі платежі через відділення банку. Рівень безпеки Клієнта – як у офіційного дилера</h5>
</div>

<div class="third-text">
<h2>На ринку з 2007 р.</h2>
<h5>За весь час продано понад 10 000 автомобілів з пробігом. За 2021 рік – 1011 автомобілів</h5>
</div>

<div class="fourth-text">
<h2>Контроль пробігу</h2>
<h5>Ми принципово не приймаємо у продаж автомобіль, якщо є підтвердження, що пробіг коригувався</h5>
</div>

</div>
<h1 class="text">Вас може зацікавить:</h1>

<div class="cards-in-main-container">
          <div class="cards">
            <img src="https://gamerwall.pro/uploads/posts/2022-02/1645930457_6-gamerwall-pro-p-volshebnaya-mashina-krasivie-oboi-6.jpg" class="cardsImg"></img>
            <span>Волшебная машина</span>
            <span>1 470 300 grn</span>
            <a href="" class="detal">Детальніше</a>
          </div>
          <div class="cards">
            <img src="https://phonoteka.org/uploads/posts/2021-07/1625490426_21-phonoteka-org-p-neonovie-mashini-na-rabochii-stol-krasivo-21.jpg" class="cardsImg"></img>
            <span>Волшебная машина</span>
            <span>1 470 300 grn</span>
            <a href="" class="detal">Детальніше</a>
          </div>
          <div class="cards">
            <img src="https://phonoteka.org/uploads/posts/2021-07/1625490366_34-phonoteka-org-p-neonovie-mashini-na-rabochii-stol-krasivo-34.jpg" class="cardsImg"></img>
            <span>Волшебная машина</span>
            <span>1 470 300 grn</span>
            <a href="" class="detal">Детальніше</a>
          </div>
          <div class="cards">
            <img src="https://phonoteka.org/uploads/posts/2021-07/1625490426_21-phonoteka-org-p-neonovie-mashini-na-rabochii-stol-krasivo-21.jpg" class="cardsImg"></img>
            <span>Волшебная машина</span>
            <span>1 470 300 grn</span>
            <a href="" class="detal">Детальніше</a>
          </div>
        </div>

        <div class="text-container">
          <div class="box-text">
        <h5>Викуп автомобиля</h5>
            <span>Найпростіший і швидкий спосіб продати автомобіль.</span>
            </div>
          <div class="box-text">
            <h5>Трейд-ін</h5>
            <span>Швидкий і зручний спосіб обміняти свій автомобіль на новий.</span>
          </div>
          <div class="box-text">
            <h5>Кредит</h5>
            <span>Розрахуємо і підберемо кредит на найбільш вигідних умовах.</span>
            </div>
          </div>
          
      
      <footer class="footer">
        <div class="foter-container">
        NІДІ Автомобілі з пробігом
        
        +38 (044) 503-33-53
        sales.automarket@vidi.ua
        <h3>Пн - Пт з 08:30 до 18:00
        <hr></hr>
Сб - Нд з 08:30 до 18:00</h3>
        <hr></hr>
<h4>вул.Велика Кільцева, 58</h4>
        </div> 
</footer>
    </div>
    
  );
}

export default HomeApp;
