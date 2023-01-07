import styled from 'styled-components';
import { HOME_STYLE } from '@constants';

export const Section = styled.section`
  position: absolute;
  width: ${HOME_STYLE.LIST_SECTION_WIDTH};
  padding: ${HOME_STYLE.SECTION_PADDING};
`;
export const List = styled.ul`
  list-style: inside;
`;
export const ListItem = styled.li`
  :hover {
    cursor: pointer;
  }
`;
export const AddButton = styled.button``;
