import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { NewOrder } from "./components/NewOrder";
import { Orders } from "./components/Orders";
import { ProtectedRoute } from "./components/ProtextedRoute";
import { Link } from "react-router-dom";
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { useSelector } from "react-redux";
import { store } from './Redux/store';
import "./App.css"
import { useEffect, useState } from "react";

function App() {
  const [login ,setlogin]= useState(false)
  
  const auth = useSelector((store) => store.auth);

  useEffect(()=>{
    setlogin(auth.auth)
  })

  console.log(auth)
  return (
    <div className="App">
      <div>
        <Link className="nav-home" to="/">
          Home
        </Link>
        {/* Show either login or logout below */}
        {login ? <Link className="nav-login" to="/login">
          Login
        </Link> : <Link className="nav-logout" to="/logout">
          Logout
        </Link> }
      </div>
        {/* Routes are as follows:
        Route      Component
        /           Home
        /login      Login
        /logout     Logout
        /orders     Orders    Protected
        /neworder   NewOrder  Protected
        */}
        <Routes>
        <Route path='/' element= {<Home/>}></Route>
        <Route path='/login' element= {<Login/>}></Route>
        <Route path='/logout' element= {<Logout/>}></Route>
        <Route path='/orders' element= {<Orders/>}></Route>
        <Route path='/neworder' element= {<NewOrder/>}></Route>
      
      </Routes>
    </div>
  );
}

export default App;
