import React, { useState } from 'react';

import '../styles/ss.css';

const Signin = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Implement sign-in logic here
    console.log('Signing in with', { userId, password });
  };

  return (
    <div className="signin">
      <div className="group-2-3">
        <img src="" alt="Background" className="img-1" />
        <div className="rectangle-1-4" />
      </div>
      <div className="rectangle-1-5" />
      <img src="" alt="Logo" className="img-2" />
      <div className="group-2">
        <p className="text-3">Sign In</p>
        <label className="text-4">User ID</label>
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="rectangle-4"
        />
        <label className="text-5">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="rectangle-5"
        />
        <p className="text-6">Forgot Password</p>
        <p className="text-7">Don’t Have Account? Sign Up</p>
        <label className="text-8">
          <input type="checkbox" className="rectangle-6" /> Remember Password
        </label>
        <div className="rectangle-3" onClick={handleSignIn}>
          <p className="text-9">Sign In</p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
