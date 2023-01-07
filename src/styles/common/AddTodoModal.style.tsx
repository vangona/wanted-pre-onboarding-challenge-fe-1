import styled from 'styled-components';
import { Z_INDEX } from '@constants';

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  z-index: ${Z_INDEX.MODAL};
  background-color: white;
`;
