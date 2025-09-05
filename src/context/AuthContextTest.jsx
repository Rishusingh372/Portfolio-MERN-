import React from 'react';
import { useAuth } from './AuthContext';

const AuthContextTest = () => {
  const auth = useAuth();
  
  console.log('AuthContext values:', {
    user: auth.user,
    token: auth.token,
    loading: auth.loading,
    isAuthenticated: auth.isAuthenticated,
    isAdmin: auth.isAdmin
  });
  
  return (
    <div>
      <h2>Auth Context Test</h2>
      <pre>
        {JSON.stringify({
          user: auth.user,
          token: auth.token,
          loading: auth.loading,
          isAuthenticated: auth.isAuthenticated,
          isAdmin: auth.isAdmin
        }, null, 2)}
      </pre>
    </div>
  );
};

export default AuthContextTest;
