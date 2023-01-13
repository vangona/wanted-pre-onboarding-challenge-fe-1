import styled from 'styled-components';
import { HOME_STYLE } from '@constants';

export const Layout = styled.div<{
  left: number;
  top: number;
  defaultOpacity: number;
}>`
  position: absolute;
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;
  display: flex;
  justify-content: center;
  width: 320px;
  height: 240px;
  margin-left: ${HOME_STYLE.LIST_SECTION_WIDTH};
  padding: ${HOME_STYLE.NOTE_INNER_PADDING};
  opacity: ${(props) => props.defaultOpacity};
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  background-color: var(--beige-color);
  transition: 0.3s all ease-in-out;
  :hover {
    opacity: 1;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  right: -5px;
  top: -5px;
  width: 20px;
  height: 20px;
  font-size: 10px;
  border: none;
  border-radius: 50%;
  :hover {
    cursor: pointer;
  }
`;
