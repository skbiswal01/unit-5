import './App.css';
import Button from './component/buttonss';

function App() {
  return (
    <div className="App">
      <Button
      bgcolor = {"dodgerblue"} color={"white"} >Primery Button</Button>
      <Button border={"black"}>Default Button</Button>
      <Button border={"dashed"}>Dashed Button</Button>
      <br/>
      <Button>Text Button</Button>
     <Button onClick={()=>{window.location.href="https://www.google.com"}}>Link Button</Button>
      
    </div>

  );
}

export default App;
