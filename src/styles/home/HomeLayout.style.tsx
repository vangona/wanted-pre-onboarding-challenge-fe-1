import styled from 'styled-components';

export const Layout = styled.div<{ randBgSrc: string }>`
  width: 100%;
  height: 100%;
  display: flex;
  background-image: url(${(props) => props.randBgSrc});
  background-size: auto 100%;
  background-position: center;
`;
