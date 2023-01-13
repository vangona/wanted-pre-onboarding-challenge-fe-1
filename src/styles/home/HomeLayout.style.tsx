import bgImg from '@assets/img/1.jpg';
import styled from 'styled-components';

export const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-image: url(${bgImg});
  background-size: cover;
  background-position: center;
`;
