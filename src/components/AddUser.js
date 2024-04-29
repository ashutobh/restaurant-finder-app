import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import { Navigate } from "react-router-dom";

const AddUser = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // Update form data
    setFormData({
      ...formData,
      [name]: value,
    });

    // Perform validation
    if (name === "firstName" && value === "") {
      setFormErrors({
        ...formErrors,
        firstName: "First name is required.",
      });
    } else if (name === "lastName" && value === "") {
      setFormErrors({
        ...formErrors,
        lastName: "Last name is required.",
      });
    } else if (name === "email" && !/^\S+@\S+\.\S+$/.test(value)) {
      setFormErrors({
        ...formErrors,
        email: "Invalid email address.",
      });
    } else {
      // Clear validation errors if input is valid
      setFormErrors({
        ...formErrors,
        [name]: "",
      });
    }
  };

  const HandleSubmit = (event) => {
    event.preventDefault();

    // Perform validation before submitting the form
    const validationErrors = Object.keys(formData).reduce((errors, name) => {
      if (formData[name] === "") {
        errors[name] = `${
          name.charAt(0).toUpperCase() + name.slice(1)
        } is required.`;
      } else if (name === "email" && !/^\S+@\S+\.\S+$/.test(formData[name])) {
        errors[name] = "Invalid email address.";
      }
      return errors;
    }, {});

    // Update form errors
    setFormErrors(validationErrors);

    // Check if there are any validation errors
    if (Object.values(validationErrors).every((error) => error === "")) {
      // Perform custom business logic or submit the form

      try {
        axios
          .post("http://localhost:8080/restaurant/api/v1/addUser", {
            userFirstName: formData.firstName,
            userLastName: formData.lastName,
            userEmailAddress: formData.email,
          })
          .then((res) => {
            console.log(res);
            console.log(res.data);
            if(res != null && res.data != null && res.data.statusCode == 201) {
              localStorage.setItem("restaurantFinderUserId", JSON.stringify(res.data.emailAddress));
               alert("User Added Successfully");
               window.location = "/addUser"; 
            } else {
               alert(res.data.message);  
               window.location = "/addUser"; 
            }           
          });
          
      } catch (error) {
        console.error("Error fetching data:", error);
        window.location = "/addUser"; //This line of code will redirect you once the submission is succeed
      }
    } else {
      console.log("Form validation failed. Please check the errors.");
    }
  };

  return (
    <form>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
        />
        <span className="error">{formErrors.firstName}</span>
      </label>
      {"\n"}
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
        />
        <span className="error">{formErrors.lastName}</span>
      </label>
      {"\n"}

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <span className="error">{formErrors.email}</span>
      </label>
      {"\n"}
      <button type="submit" onClick={HandleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default AddUser;
