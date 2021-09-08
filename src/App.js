//import logo from "./logo.svg";
import "./App.css";
//import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/cart/Cart";
import Pagenotfound from "./components/PageNotFound";
import Modal from "./components/Modal";
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList}></Route>
        <Route path="/details" component={Details}></Route>
        <Route path="/store" component={Cart}></Route>
        <Route component={Pagenotfound}></Route>
      </Switch>
      <Modal />
    </>
  );
}

export default App;
