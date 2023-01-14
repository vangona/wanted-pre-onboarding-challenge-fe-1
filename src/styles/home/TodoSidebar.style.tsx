import styled from 'styled-components';
import { HOME_STYLE } from '@constants';

export const Layout = styled.section<{ isSidebarOpen: boolean }>`
  position: relative;
  width: ${HOME_STYLE.LIST_SECTION_WIDTH};
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: ${HOME_STYLE.SECTION_PADDING};
  background-color: var(--primary-green-color);
  color: var(--off-white-color);
  transition: 1s all ease-in-out;
  transform: ${(props) =>
    !props.isSidebarOpen &&
    'translateX(-' + HOME_STYLE.LIST_SECTION_WIDTH + ')'};
  z-index: 9;
`;

export const Title = styled.h1`
  margin-top: 30px;
  font-size: 1.5rem;
  font-weight: bold;
`;
export const List = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  line-height: 160%;
`;

export const AddButton = styled.button`
  width: 250px;
  height: 40px;
  border-radius: 5px;
  background-color: var(--brown-color);
  color: var(--off-white-color);
  :hover {
    cursor: pointer;
  }
  :active {
    transform: scale(0.98);
  }
`;

export const OpacityInput = styled.input``;

export const ToggleSidebar = styled.button`
  position: absolute;
  top: 0;
  right: -3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 100%;
  border: none;
  font-size: 1.5rem;
  font-weight: bold;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 0) 100%
  );
  color: var(--off-white-color);
  :hover {
    cursor: pointer;
  }
`;
