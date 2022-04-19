import './App.css';
import Button from './component/buttonss';

function App() {
  return (
    <div className="App">
      <Button
      bgcolor = {"dodgerblue"} >Primery Button</Button>
      <Button>Default</Button>
      <Button>Dashed Button</Button>
      <br/>
      <Button>Text Button</Button>
      <Button>Link Button</Button>
    </div>
  );
}

export default App;
