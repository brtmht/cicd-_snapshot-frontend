import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import { useState,useEffect } from 'react';


function App() {
  const [alldata,setAllData]=useState();
  const [thought,setThought]=useState();

  useEffect(()=>{
    const loadProjects = async () => {
      const value=  await fetch("https://type.fit/api/quotes");

      const data = await value.json();
      console.log("ddddddddd",data)
      if(data){
        setAllData(data);
        const newIndex = Math.floor(Math.random() * data.length)
        console.log("newIndex",newIndex)
        setThought(data[newIndex])
      }
    }
    loadProjects();
  },[])

  const handleClick=async()=>{
   const newIndex = Math.floor(Math.random() * alldata.length)
   setThought(alldata[newIndex]);
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className='thought_div'>
        <div className='thout'>
          {thought?.text}
        </div>
        <h3 className='author'>...{thought?.author}</h3>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <Button variant="light" onClick={handleClick}>Next Quote</Button>{' '} 
      </header>
    </div>
  );
}

export default App;
