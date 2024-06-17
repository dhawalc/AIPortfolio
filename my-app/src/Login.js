import React from 'react';

const Login = () => {
  const responseGoogle = () => {
    // Redirect to the backend Google login route
    window.location.href = 'http://localhost:5000/auth/google';
  };

  return (
    <div>
      <h2>Login with Google</h2>
      <button onClick={responseGoogle}>Login with Google</button>
    </div>
  );
};

export default Login;
