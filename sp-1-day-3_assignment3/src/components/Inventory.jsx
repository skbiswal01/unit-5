import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
  });
    // Create add and remove functions here that changes the
    // state.
    function inventoryHandeler(str,value){
      let m={}
        m[str]=inv[str]+value
      let res = {
        ...inv,
        ...m
      };
      if(res[str]<0){
        return;
      }
      setInv(res);
    }



    let sum = 0;

for (const value of Object.values(inv)) {
  sum += value;
}

  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button className="circlularButton" onClick={()=>{inventoryHandeler('books',+1)}}>+</button>
        <button className="circlularButton" onClick={()=>{inventoryHandeler('books',-1)}}>-</button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton" onClick={()=>{inventoryHandeler('notebooks',+1)}}>+</button>
        <button className="circlularButton" onClick={()=>{inventoryHandeler('notebooks',-1)}}>-</button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton" onClick={()=>{inventoryHandeler('pens',+1)}}>+</button>
        <button className="circlularButton" onClick={()=>{inventoryHandeler('pens',-1)}}>-</button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button className="circlularButton">+</button>
        <button className="circlularButton">-</button>
        <span>{inv.inkpens}</span>
      </div>
            {/*calculate total and show it*/}
      total: {sum}
    </div>
  );
};