import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import Products from "./products/Products";
import DetailProduct from "./detailProduct/DetailProduct";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Cart from "./cart/Cart";
import NotFound from "./utils/not_found/NotFound";
import Categories from "./categories/Categories";
import CreateProduct from "./createProduct/CreateProduct";
import { GlobalState } from "../../GlobalState";
import Feedback from "./feedback/Feedback";
import Fetchfeedback from "./feedback/Fetchfeedback";
import Slider from "./Slider";
import Mail from "./cart/Mail";
import Otpconfirm from "./cart/Otpconfirm";
function Pages() {
  const state = useContext(GlobalState);
  const [isLogged] = state.userAPI.isLogged;
  const [isAdmin] = state.userAPI.isAdmin;
  return (
    <Switch>
      <Route path="/" exact component={Slider} />
      <Route path="/email" exact component={Mail} />
      <Route path="/otpverify" exact component={Otpconfirm} />
      <Route path="/products" exact component={Products} />
      <Route path="/detail/:id" exact component={DetailProduct} />
      <Route path="/login" exact component={isLogged ? NotFound : Login} />
      <Route
        path="/register"
        exact
        component={isLogged ? NotFound : Register}
      />
      <Route path="/category" exact component={isAdmin ? Categories : Login} />
      <Route
        path="/create_product"
        exact
        component={isAdmin ? CreateProduct : Login}
      />
      <Route
        path="/edit_product/:id"
        exact
        component={isAdmin ? CreateProduct : Login}
      />

      <Route
        path="/feedback"
        exact
        component={isAdmin ? Fetchfeedback : Feedback}
      />
      <Route path="/cart" exact component={Cart} />
      <Route path="*" exact component={NotFound} />
    </Switch>
  );
}
export default Pages;
