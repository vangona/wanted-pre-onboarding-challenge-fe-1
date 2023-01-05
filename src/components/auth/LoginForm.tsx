import React, { useState, useEffect } from 'react';
import checkIsValidEmail from '../..//utils/checkIsValidEmail';
import * as Styled from '../../styles/auth/AuthForm.style';
import checkIsValidPassword from '../../utils/checkIsValidPassword';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidForm, setIsValidForm] = useState(false);

  const handleChangeEmail: React.ChangeEventHandler = (event) => {
    const target = event.target as HTMLInputElement;
    setEmail(target.value);
  };

  const handleChangePassword: React.ChangeEventHandler = (event) => {
    const target = event.target as HTMLInputElement;
    setPassword(target.value);
  };

  useEffect(() => {
    if (checkIsValidEmail(email) && checkIsValidPassword(password)) {
      setIsValidForm(true);
    } else {
      setIsValidForm(false);
    }
  }, [email, password]);

  return (
    <Styled.Form>
      <Styled.Box>
        <Styled.Label>이메일 : </Styled.Label>
        <Styled.EmailInput
          type='text'
          value={email}
          onChange={handleChangeEmail}
        />
      </Styled.Box>
      <Styled.Box>
        <Styled.Label>비밀번호 : </Styled.Label>
        <Styled.PasswordInput
          type='password'
          value={password}
          onChange={handleChangePassword}
        />
      </Styled.Box>
      <Styled.SubmitButton disabled={!isValidForm}>
        로그인하기
      </Styled.SubmitButton>
    </Styled.Form>
  );
};

export default LoginForm;
