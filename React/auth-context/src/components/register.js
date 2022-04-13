import React from "react";

const Register = (props) => {
  const handleSign = async () => {
    
    fetch("http://localhost:3000/api/register", {
      method: "POST", // or 'PUT'
     
      body: JSON.stringify({username:'milad', password:'123'}), // data can be `string` or {object}!
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="account-form">
      <h2>Sign up</h2>
      <div className="error-message" data-testid="error-message"></div>
      <form>
        <input type="text" id="username" placeholder="Enter username" />
        <input type="password" id="password" placeholder="Enter password" />
        <button  data-testid="register-btn" onClick={handleSign}>
          Register
        </button>
      </form>
      <button className="link" onClick={props.changePage}>
        Already have an account? Log In
      </button>
    </div>
  );
};

export default Register;
