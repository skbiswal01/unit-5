import "./App.css"
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { EmployeeList } from "./components/EmployeeList";
import { EmployeeDetails } from "./components/EmployeeDetails";
import { Admin } from "./components/Admin";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Navbar } from "./components/Navbar";
import { Logout } from "./components/Logout";
import { Route, Routes } from 'react-router-dom';
import { LoginContext } from "./Contex/Logincontex";
import { useContext } from "react";

function App() {
  const {login} = useContext(LoginContext)
  return (
    <div className="App">
      <Navbar />
      <Routes>{/* Routes here */}
        <Route path='/' element= {<Home/>}></Route>
        <Route path='/login' element= {<Login/>}></Route>
        <Route path='/employees' element= {<EmployeeList/>}></Route>
        <Route path='/employees/:id' element= {<ProtectedRoute login={login}>
          <EmployeeDetails /> 
        </ProtectedRoute>}></Route>
        <Route path='/admin' element= {<ProtectedRoute login={login}><Admin></Admin></ProtectedRoute>}></Route>
        <Route path='/logout' element= {<Logout/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
