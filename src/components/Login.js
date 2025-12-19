import React from "react";
function Login({ setLoggedIn, loggedIn }) {
  return (
    <>
      <p>login</p>
      <button onClick={() => setLoggedIn((cur) => !cur)}>
        {loggedIn ? "Logout" : "Login"}
      </button>
    </>
  );
}
export default Login;
