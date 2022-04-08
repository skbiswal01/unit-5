
// import logo from './logo.svg';
import './App.css';

function App() {
  const links = ["Service", "Projects", "About"];
  const Data = [
    {
      Title: "Mobile Operatiing System",
      List:["Android","Blackberry","Iphone","Windows Phone"],
    },
    {
      Title: "Mobile Manufacture",
      List:["Samsung","HTC","Micromax","Apple"],
    }
  ]
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
      
      {Data.map((e)=>{
        return <Shop Title={e.Title} List={e.List}  />
      })}
    </div>
  );
};
// component
function Shop({Title,List}){
  return <>
  <h2>{Title}</h2>
  <ul>{List.map((e)=>{
    return <li>{e}</li>
  })}</ul>
  </>
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