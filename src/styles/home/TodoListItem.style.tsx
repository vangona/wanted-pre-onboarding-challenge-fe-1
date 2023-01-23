import styled from 'styled-components';

export const ListItem = styled.li`
  width: 250px;
  height: 30px;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  background-color: var(--beige-color);
  color: var(--brown-color);
`;

export const TodoCheckbox = styled.input`
  :hover {
    cursor: pointer;
  }
`;
export const TodoTitle = styled.h3<{ isFinish: boolean }>`
  max-width: 150px;
  max-height: 1.5rem;
  justify-self: flex-start;
  text-decoration: ${(props) => props.isFinish && 'line-through'};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  :hover {
    cursor: pointer;
  }
  :active {
    transform: scale(0.98);
  }
`;
export const DeleteButton = styled.button`
  border: none;
  background-color: transparent;
  :hover {
    cursor: pointer;
  }
`;
