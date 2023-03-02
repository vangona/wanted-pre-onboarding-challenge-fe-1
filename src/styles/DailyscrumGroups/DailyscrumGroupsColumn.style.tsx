import styled from 'styled-components';

export const Column = styled.div`
  width: 200px;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border: 1px solid black;
  border-radius: 10px;
`;

export const GroupName = styled.h2`
  text-align: center;
  font-size: 1.5rem;
`;

export const MemberList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const MemberName = styled.li``;
