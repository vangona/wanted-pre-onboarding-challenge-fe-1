import styled from 'styled-components';

export const AuthContainer = styled.div<{ isRegister: boolean }>`
  width: ${(props) => (props.isRegister ? '500px' : '450px')};
  height: ${(props) => (props.isRegister ? '350px' : '320px')};
  padding: 40px 80px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  background-color: var(--beige-color);
  color: var(--brown-color);
  transition: 0.3s all ease-in;
`;

export const AuthTitle = styled.h1`
  font-size: 1.5rem;
`;

export const AuthButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  :hover {
    cursor: pointer;
  }
`;
