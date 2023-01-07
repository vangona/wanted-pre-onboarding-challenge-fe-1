import styled from 'styled-components';
import { Z_INDEX } from '@constants';

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 300px;
  height: 200px;
  padding: 20px;
  border-radius: 15px;
  transform: translate(-50%, -50%);
  z-index: ${Z_INDEX.MODAL};
  background-color: white;
`;

export const Header = styled.h1`
  text-align: center;
  font-size: 1.5rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Box = styled.div`
  display: flex;
  gap: 10px;
`;
export const Label = styled.label``;
export const TitleInput = styled.input``;
export const ContentInput = styled.input``;
export const SubmitButton = styled.button`
  align-self: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  right: -5px;
  top: -5px;
  border: none;
  border-radius: 50%;
  :hover {
    cursor: pointer;
  }
`;
