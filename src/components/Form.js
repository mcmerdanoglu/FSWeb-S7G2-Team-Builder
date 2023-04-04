import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    language: "",
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user.name);
    console.log(user.password);
    console.log(user.language);
  };

  return (
    <div className="form">
      <h2>Giriş yapınız</h2>
      {console.log(user)}
      <form onSubmit={(event) => handleSubmit(event)} className="form-line">
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={(event) => handleChange(event)}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            name="password"
            value={user.password}
            onChange={(event) => handleChange(event)}
          />
        </label>
        <label>
          Language:
          <input
            type="text"
            name="language"
            value={user.language}
            onChange={(event) => handleChange(event)}
          />
        </label>
        <button className="submit">Add member</button>
      </form>
    </div>
  );
}

export default Form;
