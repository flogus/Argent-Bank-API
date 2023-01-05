import React from 'react';

function Createform() {
    return(
        <form>
            <div className="input-wrapper">
                <label for="firstname">First Name</label>
                <input type="text" id="firstname" />
            </div>
            <div className="input-wrapper">
                <label for="lastname">Last Name</label>
                <input type="text" id="lastname" />
            </div>
            <div className="input-wrapper">
                <label for="password">Password</label>
                <input type="password" id="password" />
            </div>
            <div className="input-wrapper">
                <label for="email">Email</label>
                <input type="text" id="email" />
            </div>
            <div className="input-remember">
                <input type="checkbox" id="remember-me" />
                <label for="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button">Create account</button>
        </form>
    )
  }
  
  export default Createform;
