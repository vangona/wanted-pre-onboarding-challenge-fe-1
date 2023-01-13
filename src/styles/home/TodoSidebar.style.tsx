import styled from 'styled-components';
import { HOME_STYLE } from '@constants';

export const Layout = styled.section`
  position: absolute;
  width: ${HOME_STYLE.LIST_SECTION_WIDTH};
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: ${HOME_STYLE.SECTION_PADDING};
  box-shadow: 3px 0px 5px rgba(0, 0, 0, 0.5);
  background-color: var(--primary-green-color);
  color: var(--off-white-color);
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
