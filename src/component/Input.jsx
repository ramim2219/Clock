import React, { useState } from 'react';

const Input = () => {
  const [profile, setProfile] = useState({});
  const handleChange = (e) => {
    console.log(e.target.name);
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile Data:', profile);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>User Profile Form</h1>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Age:
          <input
            type="number"
            name="age"
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Input;
