import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import "./components.css";
export const EmployeeDetails = () => {
  const [one,setone] = useState({});
  const{id}=useParams();
  useEffect(()=>{
    async function getdata(){
      var data = await fetch(`http://localhost:8080/employee/${id}`)
      var res = await data.json();
      setone(res)
    }
    getdata()
  },[])

  return (
    <div className="user_details">
      <img className="user_image"  src={`${one.image}`} />
      <h4 className="user_name">{one.employee_name}</h4>
      <span className="user_salary">${one.salary}</span>
      <span className="tasks">
        <li className="task">{one.tasks}</li>
      </span>
      Status: <b className="status">{one.status}</b>
      Title: <b className="title">{one.title}</b>
      {/* Show this button only if user is not already terminated (users status is working) */
      one.status==="terminated" ? " " : <><button className="fire">Fire Employee</button> <button className="promote">promote</button> </>
      }
      {/* <button className="fire">Fire Employee</button> */}
      {/* Show this button only if user is not already team lead or terminated */}
      
    </div>
  );
};
