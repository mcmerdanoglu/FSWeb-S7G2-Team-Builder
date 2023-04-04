import React, { useState, useEffect } from "react";
import "./Form.css";

const emptyForm = { username: "", password: "", language: "" };

function Form(props) {
  const [formData, setFormData] = useState(emptyForm);
  const [isEditing, setisEditing] = useState(false);

  useEffect(() => {
    console.log("Ak Gandalf oldum");
    props.editMode ? setFormData(props.editMode) : setFormData(emptyForm);
    props.editMode ? setisEditing(true) : setisEditing(false);
  }, [props.editMode]);

  const handleChange = (event) => {
    console.log(event.target.value);
    const newFormData = {
      ...formData,
      [event.target.name]: event.target.value,
    };
    setFormData(newFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addMember(formData);
    setisEditing(false);
    setFormData(emptyForm);
  };

  return (
    <div className="form">
      {isEditing ? <h2>Üye Düzenle</h2> : <h2>Yeni Üye Ekle</h2>}
      <form onSubmit={handleSubmit} className="form-line">
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={(event) => handleChange(event)}
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="text"
            name="password"
            value={formData.password}
            onChange={(event) => handleChange(event)}
          />
        </label>
        <label htmlFor="language">
          Language:
          <input
            type="text"
            name="language"
            value={formData.language}
            onChange={(event) => handleChange(event)}
          />
        </label>
        <button className="submit" type="submit">
          {isEditing ? "Edit Member" : "Add New Member"}
        </button>
      </form>
    </div>
  );
}

export default Form;
