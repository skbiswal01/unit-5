import { useContext, useEffect } from "react";
import { LoginContext } from "../Contex/Logincontex";
import "./components.css";
export const Login = () => {
  const {handlelogin}= useContext(LoginContext)
  var data = {
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
  };

   const handle =(e)=>{
    e.preventDefault();
    handlelogin()
   }
  useEffect(()=>{
    const handleSubmit = async(e) => {
      e.preventDefault();
    
      await fetch("https://reqres.in/api/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((res) => res.json())
        
     console.log(data)
    }
  },[])
   
  return (
    <form className="loginform" onSubmit={handle}>
      <input
        name="username"
        type="text"
        placeholder="Enter username"
        className="login_username"
      />
      <input
        name="password"
        type="text"
        placeholder="Enter password"
        className="login_password"
      />
      <input type="submit" value="SIGN IN" className="login_submit" />
    </form>
  );
};
