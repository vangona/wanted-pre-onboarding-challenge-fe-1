import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import login from '@apis/login';
import signup from '@apis/signup';
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

  const handleChangeEmail: React.ChangeEventHandler = (event) => {
    const target = event.target as HTMLInputElement;
    setEmail(target.value);
  };

  const handleChangePassword: React.ChangeEventHandler = (event) => {
    const target = event.target as HTMLInputElement;
    setPassword(target.value);
  };

  const handleChangeRePassword: React.ChangeEventHandler = (event) => {
    const target = event.target as HTMLInputElement;
    setRepassword(target.value);
  };

  const handleLogin: React.FormEventHandler = async (event) => {
    event.preventDefault();
    setError('');

    const result = await login(email, password);

    if ('details' in result) {
      setError(result.details);
    } else {
      localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, result.token);
      navigate(0); // reload를 통해서 루트 경로로 이동
      alert(result.message);
    }

    setEmail('');
    setPassword('');
  };

  const handleRegister: React.FormEventHandler = async (event) => {
    event.preventDefault();
    setError('');
    if (password !== repassword) setError('비밀번호가 다릅니다.');

    const result = await signup(email, password);

    if ('details' in result) {
      setError(result.details);
    } else {
      alert(result.message);
    }

    setEmail('');
    setPassword('');
    setRepassword('');
  };

  useEffect(() => {
    if (checkIsValidEmail(email) && checkIsValidPassword(password)) {
      setIsValidForm(true);
    } else {
      setIsValidForm(false);
    }
  }, [email, password]);

  return (
    <Styled.Form onSubmit={isRegister ? handleRegister : handleLogin}>
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
      {isRegister && (
        <Styled.Box>
          <Styled.Label>비밀번호 확인 : </Styled.Label>
          <Styled.PasswordInput
            type='password'
            value={repassword}
            onChange={handleChangeRePassword}
          />
        </Styled.Box>
      )}
      <div>{error}</div>
      <Styled.SubmitButton disabled={!isValidForm}>
        {isRegister ? '회원가입' : '로그인'}
      </Styled.SubmitButton>
    </Styled.Form>
  );
};

export default AuthForm;
