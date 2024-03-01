import React, { useState } from "react";

export default function Form() {
  const [formData, setForm] = useState({
    firstName: "",
    lastName: "",
    address: "",
  });
  console.log(formData);

  function handleChange(event) {
    console.log(event.target.value);

    setForm((preState) => {
      return { ...preState, [event.target.name]: event.target.value };
    });
  }

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="FirstName"
          name="firstName"
          onChange={handleChange}
          value={formData.firstName}
        />
        <input
          type="text"
          placeholder="lastName"
          name="lastName"
          onChange={handleChange}
          value={formData.lastName}
        />
        <input
          type="text"
          placeholder="address"
          name="address"
          onChange={handleChange}
          value={formData.address}
        />
      </form>
    </div>
  );
}
