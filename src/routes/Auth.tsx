import React, { useState } from 'react';
import AuthLayout from '@components/auth/AuthLayout';
import LoginForm from '@components/auth/LoginForm';
import RegisterForm from '@components/auth/RegisterForm';

const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);

  const toggleRegister = () => {
    setIsRegister((prev) => !prev);
  };

  return (
    <AuthLayout isRegister={isRegister} toggleIsRegister={toggleRegister}>
      {isRegister ? <RegisterForm /> : <LoginForm />}
    </AuthLayout>
  );
};

export default Auth;
