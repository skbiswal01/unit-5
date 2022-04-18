import { useState } from "react";
import "./AddStudent.css";
export const AddStudent = () => {
  const [error, seterror] = useState(false)
  const [formData,setform]=useState({
    first_name:"",
    last_name:"",
    email:"",
    gender:0,
    age: 0,
    tenth_score: 0,
    twelth_score:0 ,
    preferred_branch: 0,
  });
  const handlechange=(e)=>{
    const {name,value} = e.target;
    setform({
        ...formData,
        [name]:value,
    })
}
  async function postdata(formData){
    if(formData.age>=100 || formData.first_name==="" || formData.twelth_score >=100 || formData.tenth_score>=100 ){
      seterror(true);
      return ;
    }else{
      var data2 = await fetch("http://localhost:8080/students",{
      method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    })
    }
    
  }


  return (
    <form className="addstudent">
      <div>
        Firstname:{" "}
        <input
          type="text"
          name="first_name"
          className="first_name"
          placeholder="enter first name"
          onChange={handlechange}
        />
      </div>
      <div>
        {" "}
        Last Name:
        <input
          type="text"
          name="last_name"
          className="last_name"
          placeholder="enter last name"
          onChange={handlechange}
        />
      </div>
      <div>
        {" "}
        Email:
        <input
          type="email"
          name="email"
          className="email"
          placeholder="enter email"
          onChange={handlechange}
        />
      </div>

      <div className="gender">
        Gender: {/* NOTE: radio boxes only work when they have same `name`. */}
        <div>
          Male
          <input
            onChange={handlechange}
            name="gender"
            className="male"
            type="radio"
            value={"male"}
          />{" "}
          Female{" "}
          <input
            name="gender"
            className="female"
            type="radio"
            value={"female"}
            onChange={handlechange}
          />
        </div>
      </div>
      <div>
        Age{" "}
        <input
          type="number"
          name="age"
          className="age"
          placeholder="enter age"
          onChange={handlechange}
        />
      </div>
      <div>
        Tenth Score:{" "}
        <input
          type="number"
          name="tenth_score"
          className="tenth_score"
          placeholder="enter 10th score"
          onChange={handlechange}
        />{" "}
      </div>
      <div>
        Twelth Score:{" "}
        <input
          type="number"
          name="twelth_score"
          className="twelth_score"
          placeholder="enter 12th score"
          onChange={handlechange}
        />{" "}
      </div>
      <div>
        <select
          value={""} // select dropdown needs both value and onChange attributes
          name="preferred_branch"
          className="preferred_branch"
          onChange={handlechange}
        >
          <option value="law" onChange={handlechange}>law</option>
          <option value="commerce" onChange={handlechange}>commerce</option>
          <option value="science" onChange={handlechange}>science</option>
          <option value="sports" onChange={handlechange}>sports</option>
          <option value="arts" onChange={handlechange}>arts</option>
          <option value="acting" onChange={handlechange}>acting</option>
        </select>
      </div>

      <input className="submit" type="submit" value="Submit" onClick={()=>{postdata(formData)}}/>
      {
        <div className="error"> {error ? "fill the form properly" : null}</div>
        // show this div with proper error before submitting form, if there's anything not provided
        // eg: first name missing, age cannot be greater than 100 etc
      }
    </form>
  );
};