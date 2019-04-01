import React from "react";

function Form({userName, password, handleInputChange, handleFormSubmit }) {
  return (
    <form >
      <div className="form-group">
    <input 
      className="form-control"
      value={userName}
      name="userName"
      onChange={handleInputChange}
      type="text"
      placeholder="User Name"
    />
    </div>
    <div className="form-group">
    <input
      className="form-control"
      value={password}
      name="password"
      onChange={handleInputChange}
      type="text"
      placeholder="Password"
    />
    </div>
    
    <button className = "btn btn-primary" onClick={handleFormSubmit}>Submit</button>
  </form>

  );
}

export default Form;
