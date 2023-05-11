import {  useEffect, useState } from 'react';
import { getAllMessages } from './FetchMessage';
import './App.css';


function App() {

const [message, setMessage] = useState("");
  

useEffect(() => {
   getAllMessages(setMessage)
  }, [])

return (
    <div>
        <h1>Please fill up this form </h1>

        <div class="login-box">
 
 <form method="post" action="/">
   <div class="user-box">
     <input  
     type="text" 
     name="name" 
     required=""/>
     <label>Username</label>
   </div>

   <div class="user-box">
     <input 
     type="email" 
     name="email" 
     required=""/>
     <label>Email</label>
   </div>
   
   <div class="user-box textarea">
     <textarea 
     name="message" 
     id="yourText" 
     cols="30" rows="10">
     </textarea>
     <label>Text</label>
   </div>

   <center>
     <button>
      Send
     <span></span>
     </button>
     </center>
 </form>
    </div>

  

    </div>
   
  );
}

export default App;
