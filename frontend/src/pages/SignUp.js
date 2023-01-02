import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = values;

  const handleChange = (fieldsValue) => (e) => {
    // console.log(e.target.value);
    setValues({ ...values, [fieldsValue]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = await axios.post("createAccount", {
        username,
        email,
        password,
      });
      console.log(newUser);
      if (newUser.data.success === true) {
        let newValues = { ...values };
        newValues = {
          username: "",
          email: "",
          password: "",
        };
        setValues(newValues);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="wrapper">
      <form>
        <h1 className="sub-title">Sign Up form</h1>

        <input
          placeholder="Your username"
          value={username}
          onChange={handleChange("username")}
          type="text"
        />
        <input
          placeholder="Your email"
          value={email}
          onChange={handleChange("email")}
          type="text"
        />
        <input
          placeholder="Create password"
          value={password}
          onChange={handleChange("password")}
          type="text"
        />

        <button className="btn" onClick={handleSubmit} type="submit">
          Signup
        </button>
      </form>
    </div>
  );
};

export default SignUp;
