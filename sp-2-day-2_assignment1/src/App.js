import { useState, useEffect } from "react";
import "./index.css";

function App() {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const id = setInterval(() => {
      setCounter((previousValue) => {
        if (previousValue >= 15) {
          clearInterval(id);
          return 0;
        }
        return previousValue + 1;
      });
    }, 1000);

    return function cleanUp() {
      clearInterval(id);
    };
  }, []);

  return (
    <div className="App">
      <h2>Counter</h2>
      <p> {counter}</p>
      <button>CLICK</button>
    </div>
  );
}

export default App;