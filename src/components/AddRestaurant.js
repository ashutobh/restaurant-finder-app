import React, { useState } from "react";
import axios from "axios";

const AddRestaurant = () => {
  const [formData, setFormData] = useState({
    restaurantName: "",
    restaurantAddress: ""
  });

  const [formErrors, setFormErrors] = useState({
    restaurantName: "",
    restaurantAddress: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // Update form data
    setFormData({
      ...formData,
      [name]: value,
    });

    // Perform validation
    if (name === "restaurantName" && value === "") {
      setFormErrors({
        ...formErrors,
        restaurantName: "Restaurant name is required.",
      });
    } else if (name === "restaurantAddress" && value === "") {
      setFormErrors({
        ...formErrors,
        restaurantAddress: "Restaurant address is required.",
      });
    } else if (
      name === "restaurantAddedByEmail" &&
      !/^\S+@\S+\.\S+$/.test(value)
    ) {
      setFormErrors({
        ...formErrors,
        restaurantAddedByEmail: "Invalid email address.",
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
      } else if (
        name === "restaurantAddedByEmail" &&
        !/^\S+@\S+\.\S+$/.test(formData[name])
      ) {
        errors[name] = "Invalid email address.";
      }
      return errors;
    }, {});

    // Update form errors
    setFormErrors(validationErrors);

    // Check if there are any validation errors
    if (Object.values(validationErrors).every((error) => error === "")) {
      // Perform custom business logic or submit the form

    const savedUser = localStorage.getItem('restaurantFinderUserId');
    const userId = JSON.parse(savedUser);

      const savedSession = localStorage.getItem('restaurantFinderSessionId');
      const sessionId = JSON.parse(savedSession);
      try {
        axios
        .post(`http://localhost:8080/restaurant/api/v1/addRestaurant/${sessionId}`, {
            restaurantName: formData.restaurantName,
            restaurantAddress: formData.restaurantAddress,
            restaurantAddedByEmail: userId,
          })
          .then((res) => {
            console.log(res);
            console.log(res.data);
            if(res != null && res.data != null && res.data.statusCode == 200) {
               alert("Restaurant Added Successfully");
               window.location = "/addRestaurant"; 
            } else {
               alert(res.data.message);  
               window.location = "/addRestaurant";       
            }  
          });
      } catch (error) {
        console.error("Error fetching data:", error);
        window.location = "/error"; //This line of code will redirect you once the submission is succeed
      }
    } else {
      console.log("Form validation failed. Please check the errors.");
    }
  };

  return (
    <form>
      <label>
        Restaurant Name:
        <input
          type="text"
          name="restaurantName"
          value={formData.restaurantName}
          onChange={handleInputChange}
        />
        <span className="error">{formErrors.restaurantName}</span>
      </label>

      <label>
        Restaurant Address:
        <input
          type="text"
          name="restaurantAddress"
          value={formData.restaurantAddress}
          onChange={handleInputChange}
        />
        <span className="error">{formErrors.restaurantAddress}</span>
      </label>
      <button type="submit" onClick={HandleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default AddRestaurant;
