// App.js
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import CheckOut from './Component/CheckOut/CheckOut';
import Login from './Component/LogIn/Login';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useStateValue } from './Utils/UseStateProvider';
import { useEffect } from 'react';
import { auth } from './Utils/firebase';
import Payment from './Component/Payment/Payment';
import Footer from './Component/Footer/Footer';

const promise = loadStripe (
  'pk_test_51O6whgLpOmc0cn34F4VGBhVoVll9Keaf29Og8tzUrnp8CYvmKxSb0NjHPBkCp7rrGLIa4PzSpDZ6caNVGnaoIX9500txA4IOjt');

function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/login" element={<Login />} />
          <Route path="/payment" element={<Elements stripe={promise}><Payment /></Elements>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
