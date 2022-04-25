import { useState } from "react";
import "./components.css";
export const Admin = () => {
  const [data,  setData] = useState();

  const handleChange = (e) => {
   
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    
}
const handleSubmit = async(e) => {
  e.preventDefault();

  await fetch("http://localhost:8080/employee", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
})
    .then((res) => res.json())
    console.log(data);
    
}
  
  return (
    <form className="createEmployee" onSubmit={handleSubmit}>
      <input type="text" placeholder="Employee Name" name="employee_name" onChange={handleChange} />
      <input type="text" placeholder="Employee id" name="employee_id" onChange={handleChange}/>
      <select name="title" onChange={handleChange}>
        <option value="intern">Intern</option>
        <option value="Jr Software Developer">Jr Software Developer</option>
        <option value="Sr Software Developer">Sr Software Developer</option>
        <option value="Team Lead">Team Lead</option>
      </select>
      <input type="number" placeholder="Salary" name="salary" onChange={handleChange}/>
      <input type="text" placeholder="Image" name="image" onChange={handleChange}/>
      <input type="text" placeholder="User Name" name="username" onChange={handleChange}/>
      <input type="password" placeholder="Password" name="password" onChange={handleChange}/>
      <input
        type="text"
        placeholder="Enter tasks separated by commas"
        name="tasks"
      />
      <select name="status" id="status"onChange={handleChange}>
        <option value="">Select Status</option>
        <option value="terminated">Terminated</option>
        <option value="working">Working</option>
      </select>
      <select name="team" id="team" onChange={handleChange}>
        <option value="">Select team</option>
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="qa">QA</option>
      </select>
      <input className="createUser" type="submit" value={"submit"} />
    </form>
  );
};
