import React from 'react';
import NavBar from "../../components/Header/NavBar";
import './Login.css';

function Login(){
    return (

        <div className="App">
        <div className="App__Aside"></div>
        <div className="App__Form">
          <div className="PageSwitcher">
         <a href= "#">Sign In </a> 
        <a href= "#" className= "PageSwitcher__Item PageSwitcher__Item--Active">Sign Up</a>

        <div className="FormCenter">
            <form className = "FormField" onSubmit={this.handleSubmit}>
                <div className = "FormField">
                <label className="FormField__Label" htmlFor="name">Full Name</label>
                <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" />
                
                </div>
            </form>
            </div>

      </div>
      </div>
      <NavBar/>
       </div>

    
  );
}


export default Login;
