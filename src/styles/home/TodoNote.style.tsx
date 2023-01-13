import styled from 'styled-components';
import { HOME_STYLE } from '@constants';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 320px;
  height: 240px;
  margin-left: ${HOME_STYLE.LIST_SECTION_WIDTH};
  padding: ${HOME_STYLE.NOTE_PADDING};
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  background-color: var(--beige-color);
`;
