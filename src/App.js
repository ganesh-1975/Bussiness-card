import './App.css';
import { useState } from "react";
import Form from './Form';
import Card from './Card';


function App() {

  const userdata = {
    name : 'Alexa Rose',
    designation : "FOUNDER",
    address : "91 EAST 8TH STREET,  CALIFONIA",
    pincode : "60604",
    phone : 8541236598,
    email : "WWW.ganesh@gmail.com",
    website : "ganesh.com",
  }

  let [data, setdata] = useState(() => {
    let newdata_raw = window.localStorage.getItem("USER_info")
    let newdata = userdata
    
   try {
     newdata = JSON.parse(newdata_raw)
     
   } catch (error) {
     console.log(error)
   }
 
    return newdata
 });
 let [toggle, settoggle] = useState(true);
 
 
 const toggleMe = () => {
 settoggle(datainitial => !datainitial)
 }
  
  return (
    <div>
      {toggle ?(
    <Card toggle = {toggleMe} user = {data} />
    )
    :(
    <Form toggle = {toggleMe} user = {data} update = {setdata} />
    )
  }
    </div>
  );
}

export default App;









