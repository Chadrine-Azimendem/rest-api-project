import React from "react";

const SignUp = () => {
  return (
    <div>
      <h1>Sign Up form</h1>
      <form>
        <label>
          Your username:
          <input type="text" />
        </label>
        <label>
          Your email:
          <input type="text" />
        </label>
        <label>
          create password:
          <input type="text" />
        </label>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignUp;
