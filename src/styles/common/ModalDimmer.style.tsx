import styled from 'styled-components';
import { Z_INDEX } from '@constants';

export const Dimmer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${Z_INDEX.MODAL_DIMMER};
  background-color: rgba(0, 0, 0, 0.5);
`;
