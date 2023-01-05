import React from 'react';
import EmailInput from '@components/auth/EmailInput';
import PasswordInput from '@components/auth/PasswordInput';
import * as Styled from '../../styles/auth/AuthForm.style';

const RegisterForm = () => {
  return (
    <Styled.Form>
      <Styled.Box>
        <Styled.Label>이메일 : </Styled.Label>
        <EmailInput />
      </Styled.Box>
      <Styled.Box>
        <Styled.Label>비밀번호 : </Styled.Label>
        <PasswordInput />
      </Styled.Box>
      <Styled.Box>
        <Styled.Label>비밀번호 확인 : </Styled.Label>
        <PasswordInput />
      </Styled.Box>
      <Styled.SubmitButton>회원가입하기</Styled.SubmitButton>
    </Styled.Form>
  );
};

export default RegisterForm;
