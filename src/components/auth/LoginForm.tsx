import React from 'react';
import * as Styled from '../../styles/auth/AuthForm.style';

const LoginForm = () => {
  return (
    <Styled.Container>
      <Styled.Box>
        <Styled.Label>이메일 : </Styled.Label>
        <Styled.EmailInput />
      </Styled.Box>
      <Styled.Box>
        <Styled.Label>비밀번호 : </Styled.Label>
        <Styled.PasswordInput />
      </Styled.Box>
      <Styled.SubmitButton>로그인하기</Styled.SubmitButton>
    </Styled.Container>
  );
};

export default LoginForm;
