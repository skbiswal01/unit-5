
// import logo from './logo.svg';
import './App.css';

function App() {
  const operetingSystem = ["Android","Blackberry","Iphone","Windows Phone"];
  const Manufacture = ["Samsung","HTC","Micromax","Apple"];
  const links = ["Service", "Projects", "About"];
  return (
    <div className="App">
      <div className = "navbar">
        <div>
          <Logo logo={"LOGOBAKERY"}/>
        </div>
        <div className="middle-elements">
          {links.map((e)=>{
            return <Link link={e}/>
          })}
        </div>
        <div className="contacts">
           <Btn btn={"Contact"}/>
        </div>
      </div>
      <h2>Mobile Operating System </h2>
        <ul>
          {operetingSystem.map((e)=>{
            return <Oper oper={e}/>
          })}
        </ul>
        <h2>Mobile Manufacture </h2>
        <ul>
          {Manufacture.map((e)=>{
            return <Oper oper={e}/>
          })}
        </ul>
    </div>
  );
};
// component
function Oper(data){
  return <li>{data.oper}</li>
}

function Logo(data){
   return <h3>{data.logo}</h3>
}
function Btn(data){
   return <button>{data.btn}</button>
}
function Link(links){
   return <a>{links.link}</a>
}


export default App;