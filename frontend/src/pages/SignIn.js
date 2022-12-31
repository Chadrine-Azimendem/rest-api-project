import React from "react";

const SignIn = () => {
  return (
    <div>
      <h1>Sign in form</h1>
      <form>
        <label>
          username:
          <input type="text" />
        </label>
        <label>
          email:
          <input type="text" />
        </label>
        <label>
          password:
          <input type="text" />
        </label>
        <button type="submit">SignIn</button>
      </form>
    </div>
  );
};

export default SignIn;
