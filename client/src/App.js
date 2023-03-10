import './css/App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { createBrowserHistory } from "history";
import Login from "./components/LoginPage";
import Register from "./components/RegisterPage";
import Home from "./components/HomePage";
import Sell from "./components/AddCar";
import './App.css';

function App() {
  const history = createBrowserHistory({ forceRefresh: true });
  return (
      <Router>
        <Routes history={history}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route  path="/register" element={<Register />}></Route>
            <Route  path="/sell" element={<Sell />}></Route>
        </Routes>
      </Router>
  );
}
export default App;
