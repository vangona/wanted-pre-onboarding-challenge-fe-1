import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import apiLogin from '@apis/apiLogin';
import apiSignup from '@apis/apiSignup';
import * as Styled from '@styles/auth/AuthForm.style';
import checkIsValidEmail from '@utils/checkIsValidEmail';
import checkIsValidPassword from '@utils/checkIsValidPassword';
import { LOCALSTORAGE_TOKEN_KEY } from '@constants';

interface AuthFormProps {
  isRegister: boolean;
}

const AuthForm = ({ isRegister }: AuthFormProps) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const [isValidForm, setIsValidForm] = useState(false);
  const [error, setError] = useState('');

  const handleChangeEmail: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    const target = event.target;
    setEmail(target.value);
  };

  const handleChangePassword: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    const target = event.target;
    setPassword(target.value);
  };

  const handleChangeRePassword: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    const target = event.target;
    setRepassword(target.value);
  };

  const handleLogin: React.FormEventHandler = async (event) => {
    event.preventDefault();
    setError('');

    const result = await apiLogin(email, password);

    if ('details' in result) {
      setError(result.details);
      setTimeout(() => {
        setError('');
      }, 2000);
      return;
    } else {
      localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, result.token);
      navigate(0); // reload를 통해서 루트 경로로 이동
      alert(result.message);
    }

    setEmail('');
    setPassword('');
    setError('');
  };

  const handleSignup: React.FormEventHandler = async (event) => {
    event.preventDefault();
    setError('');
    if (password !== repassword) {
      setError('비밀번호가 다릅니다.');
      setTimeout(() => {
        setError('');
      }, 2000);
      return;
    }

    const result = await apiSignup(email, password);

    if ('details' in result) {
      setError(result.details);
      setTimeout(() => {
        setError('');
      }, 2000);
      return;
    } else {
      alert(result.message);
    }

    setEmail('');
    setPassword('');
    setRepassword('');
    setError('');
  };

  useEffect(() => {
    if (checkIsValidEmail(email) && checkIsValidPassword(password)) {
      setIsValidForm(true);
    } else {
      setIsValidForm(false);
    }
  }, [email, password]);

  return (
    <Styled.Form onSubmit={isRegister ? handleSignup : handleLogin}>
      <Styled.Box>
        <Styled.Label>e-mail : </Styled.Label>
        <Styled.EmailInput
          type='text'
          value={email}
          onChange={handleChangeEmail}
          placeholder='email@example.com'
        />
      </Styled.Box>
      <Styled.Box>
        <Styled.Label>password : </Styled.Label>
        <Styled.PasswordInput
          type='password'
          value={password}
          onChange={handleChangePassword}
          placeholder='8자리 이상'
        />
      </Styled.Box>
      {isRegister && (
        <Styled.RePasswordBox>
          <Styled.Label>re-password : </Styled.Label>
          <Styled.PasswordInput
            type='password'
            value={repassword}
            onChange={handleChangeRePassword}
          />
        </Styled.RePasswordBox>
      )}
      {error && <Styled.Error>{error}</Styled.Error>}
      <Styled.SubmitButton disabled={!isValidForm}>
        {isRegister ? '회원가입' : '로그인'}
      </Styled.SubmitButton>
    </Styled.Form>
  );
};

export default AuthForm;
