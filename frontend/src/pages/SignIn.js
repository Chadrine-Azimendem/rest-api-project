import React from "react";

const SignIn = () => {
  return (
    <div className="wrapper">
      <form>
        <h1 className="sub-title">Sign In form</h1>

        <input placeholder="Your username" type="text" />

        <input placeholder="Your email" type="text" />

        <input placeholder="Your password" type="text" />

        <button className="btn" type="submit">
          SignIn
        </button>
      </form>
    </div>
  );
};

export default SignIn;
