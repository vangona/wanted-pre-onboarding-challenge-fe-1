import styled from 'styled-components';
import { HOME_STYLE } from '@constants';

export const Section = styled.section`
  position: absolute;
  width: ${HOME_STYLE.LIST_SECTION_WIDTH};
  padding: ${HOME_STYLE.SECTION_PADDING};
`;
export const List = styled.ul`
  line-height: 160%;
`;

export const ListItem = styled.li`
  display: flex;
  gap: 10px;
`;
export const TodoTitle = styled.span`
  :hover {
    cursor: pointer;
  }
`;
export const DeleteButton = styled.button``;

export const AddButton = styled.button``;
