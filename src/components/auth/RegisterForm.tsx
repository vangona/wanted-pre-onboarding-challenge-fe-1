import React from 'react';
import * as Styled from '../../styles/auth/AuthForm.style';

const RegisterForm = () => {
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
      <Styled.Box>
        <Styled.Label>비밀번호 확인 : </Styled.Label>
        <Styled.PasswordInput />
      </Styled.Box>
      <Styled.SubmitButton>회원가입하기</Styled.SubmitButton>
    </Styled.Container>
  );
};

export default RegisterForm;
