import styled from 'styled-components';
import { HOME_STYLE } from '@constants';

export const Layout = styled.section<{ isSidebarOpen: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  color: var(--off-white-color);
  transform: translateY(-20%)
    ${(props) =>
      !props.isSidebarOpen &&
      'translateX(-' + HOME_STYLE.LIST_SECTION_WIDTH_HALF + ')'};
  transition: 1s all ease-in-out;
`;

export const DateConatiner = styled.div`
  font-size: 2rem;
`;

export const TimeContainer = styled.div`
  font-size: 3.5rem;
`;
