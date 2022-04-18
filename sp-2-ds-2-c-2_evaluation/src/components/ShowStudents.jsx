import "./ShowStudents.css";
import { useEffect, useState } from "react";

export const ShowStudents = () => {
  const [studentData, setStudentData] = useState([]);
  const [sort,setsort] = useState({
    sortby:"",
    sortorder:"",
  })
  useEffect(()=>{
    async function getdata(){
      var data = await fetch("http://localhost:8080/students")
      var res = await data.json();
      setStudentData(res)
    }
    getdata()
  },[])
   
  function sortData(e){
    const {className,value} = e.target;
    setsort({
        ...sort,
        [className]:value,
    })
  }
  function sohorting(data){
    var x =data.sortby;
    if(data.sortorder==="asc" && x== "age"){
      setStudentData(studentData.sort((a,b)=>{return Number(a.age)-Number(b.age)}))
    }else if(data.sortorder==="desc" && x=="age"){
     setStudentData(studentData.sort((a,b)=>{return Number(b.age)-Number(a.age)}))
    }
    if(data.sortorder==="asc" && x== "tenth_score"){
      setStudentData(studentData.sort((a,b)=>{return Number(a.tenth_score)-Number(b.tenth_score)}))
    }else if(data.sortorder==="desc" && x=="tenth_score"){
     setStudentData(studentData.sort((a,b)=>{return Number(b.tenth_score)-Number(a.tenth_score)}))
    }
    if(data.sortorder==="asc" && x== "twelth_score"){
      setStudentData(studentData.sort((a,b)=>{return Number(a.twelth_score)-Number(b.twelth_score)}))
    }else if(data.sortorder==="desc" && x=="twelth_score"){
     setStudentData(studentData.sort((a,b)=>{return Number(b.twelth_score)-Number(a.twelth_score)}))
    }
  }
  useEffect(()=>{
    sohorting(sort)

  },[studentData])

  return (
    <div>
      <div className="controls">
        <div>
          Sort By:{" "}
          <select
            // select dropdown needs both value and onChange
            className="sortby"
            onChange={sortData}
          >
            <option value="first_name">First Name</option>
            <option value="gender">Gender</option>
            <option value="age">Age</option>
            <option value="tenth_score">10th Score</option>
            <option value="twelth_score">12th Score</option>
          </select>
        </div>
        <div>
          Order:
          <select
            // select dropdown needs both value and onChange
            className="sortorder"
            onChange={sortData}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <button className="sort" onClick={()=>{sohorting(sort)}}>sort</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
            <th>10th Score</th>
            <th>12th Score</th>
            <th>Branch</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {studentData.map((e)=>{
            return <tr className="row">
            <td className="first_name">{e.first_name}</td>
            <td className="last_name">{e.last_name}</td>
            <td className="email">{e.email}</td>
            <td className="gender">{e.gender}</td>
            <td className="age">{e.age}</td>
            <td className="tenth_score">{e.tenth_score}</td>
            <td className="twelth_score">{e.twelth_score}</td>
            <td className="preferred_branch">{e.preferred_branch}</td>
          </tr>
          })}
        </tbody>
      </table>
    </div>
  );
};