// import React from "react";
import React, {useState} from "react";

function App() {
  setInterval(getTime,1000);
  const now= new Date().toLocaleTimeString();
    const[time,setTime] =useState(now);
    function getTime(){
      const newTime=new Date().toLocaleTimeString();
      setTime(newTime);
    }
  
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onclick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
