import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Payment from './components/Payment';
import Login from './components/Login';
import Footer from './components/Footer';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Promo from './components/Promo';
import Tracks from './components/Tracks';
import Collections from './components/Collections';
import Sale from './components/Sale';
import Orders from './components/Orders';

const promise = loadStripe('pk_test_51Hhg4BEHxCnJvrRDDTcQLm6j0ZpJPFARLLNXTV8M4bOKL2ZtFqosXbfgCUsw062rudLMw5Q7ziXnWvFZCqkhVkdc00wKB0nowb');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
    <div className="app">
      <Switch>
      <Route path="/orders"><Header/><Orders/><Footer/></Route>
      <Route path="/sale"><Header/><Sale/><Footer/></Route>
      <Route path="/collections"><Header/><Collections/><Footer/></Route>
      <Route path="/tracks"><Header/><Tracks/><Footer/></Route>
        <Route path="/checkout"><Header/><Checkout/><Footer/></Route>
        <Route path="/payment"><Header/><Elements stripe={promise}>
              <Payment />
            </Elements><Footer/></Route>
        <Route path="/login"><Login/></Route>
        <Route path="/"><Header/><Home/><Promo/><Footer/></Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
