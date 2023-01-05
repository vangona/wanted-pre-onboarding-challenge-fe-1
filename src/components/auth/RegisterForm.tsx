import React, { useState, useEffect } from 'react';
import signup from '@apis/signup';
import * as Styled from '../../styles/auth/AuthForm.style';
import checkIsValidEmail from '../../utils/checkIsValidEmail';
import checkIsValidPassword from '../../utils/checkIsValidPassword';

const RegisterForm = () => {
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

  const handleSubmit: React.FormEventHandler = async (event) => {
    event.preventDefault();
    setError('');
    if (password !== repassword) setError('비밀번호가 다릅니다.');

    const result = await signup(email, password);
    if ('details' in result) {
      setError(result.details);
    } else {
      alert(result.message);
    }
  };

  useEffect(() => {
    if (checkIsValidEmail(email) && checkIsValidPassword(password)) {
      setIsValidForm(true);
    } else {
      setIsValidForm(false);
    }
  }, [email, password]);

  return (
    <Styled.Form onSubmit={handleSubmit}>
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
      <Styled.Box>
        <Styled.Label>비밀번호 확인 : </Styled.Label>
        <Styled.PasswordInput
          type='password'
          value={repassword}
          onChange={handleChangeRePassword}
        />
      </Styled.Box>
      <div>{error}</div>
      <Styled.SubmitButton disabled={!isValidForm}>
        회원가입하기
      </Styled.SubmitButton>
    </Styled.Form>
  );
};

export default RegisterForm;
