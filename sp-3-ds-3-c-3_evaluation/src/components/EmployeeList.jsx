import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import "./components.css";
 export const EmployeeList = () => {
  const [data , setdata] = useState ([]);

  useEffect(()=>{
    async function getdata(){
      var data = await fetch("http://localhost:8080/employee")
      var res = await data.json();
      setdata(res)
    }
    getdata()
    
  },[]);
  return (
  <div className="list_container" >
    {data.map((e)=>{
      return <Link to={`/employees/${e.id}`}>
      {/* On clicking this card anywhere, user goes to user details */}
      <div className="employee_card">
        <img className="employee_image" alt="img" src={e.image}/>
        <span className="employee_name">{e.employee_name}</span>
        <span className="employee_title">{e.title}</span>
      </div>
      
      </Link>
    })}
    
    </div>
  );
};
/*
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
export const UserList=()=>{
    const [user,userstate]=useState([])
    useEffect(()=>{
        axios.get("https://reqres.in/api/users?page=2").then(({data})=>{
userstate(data.data)
        })

    },[])
    return(
        <div style={{display:"grid", gridTemplateColumns:"1fr 2fr"}}>
 {user.map((user=>(<p  key={user.id}><Link to={`/users/${user.id}`}>{user.id}.{user.first_name}</Link></p>)))}

        </div>
    )
}
*/