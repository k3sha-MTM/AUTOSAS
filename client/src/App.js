
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="colorRect">
        <a href="" class="gradient-button-buy">Купити</a>
        <a href="" class="gradient-button-sell">Продати</a>
        <a href="" class="gradient-button-info">Інформація</a>
        </div>
        <img src="https://phonoteka.org/uploads/posts/2021-07/1625490383_6-phonoteka-org-p-neonovie-mashini-na-rabochii-stol-krasivo-6.jpg" class="IMAGE"></img>
        <h2>ПЕРЕВАГИ РОБОТИ З НАМИ</h2>
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
      </header>
    </div>
  );
}

export default App;
