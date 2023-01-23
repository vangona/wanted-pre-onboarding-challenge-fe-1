import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
export const Title = styled.h1`
  width: 100%;
  margin-top: 20px;
  font-size: 1.2rem;
  font-weight: bold;
  word-break: break-all;
  white-space: normal;
`;
export const Content = styled.p`
  width: 100%;
  height: 100%;
  word-wrap: break-word;
  overflow: auto;
`;
export const EditButton = styled.button`
  :hover {
    cursor: pointer;
  }
`;
