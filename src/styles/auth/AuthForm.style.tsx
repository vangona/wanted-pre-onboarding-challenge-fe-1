import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
`;

const flitering = keyframes`
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
`;
export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;
export const RePasswordBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  opacity: 0;
  animation: ${fadeIn} 0.3s forwards ease-in 0.3s;
`;

export const Label = styled.label``;
export const EmailInput = styled.input``;
export const PasswordInput = styled.input``;
export const Error = styled.div`
  padding: 5px;
  align-self: center;
  font-size: 0.9rem;
  color: red;
  animation: ${flitering} 2s forwards;
`;

export const SubmitButton = styled.button`
  margin-top: 20px;
  width: 150px;
  height: 40px;
  align-self: center;
  border-radius: 5px;
  font-size: 0.9rem;
  color: var(--off-white-color);
  background-color: var(--brown-color);
  :hover {
    cursor: pointer;
  }
  :active {
    transform: scale(0.98);
  }

  :disabled {
    background-color: gray;
    :hover {
      cursor: default;
    }
    :active {
      transform: unset;
    }
  }
`;
