import styled from 'styled-components';

export const Layout = styled.div<{ randBgSrc: string }>`
  width: 100%;
  height: 100%;
  display: flex;
  background-image: url(${(props) => props.randBgSrc});
  background-size: auto 100%;
  background-position: center;
`;

export const ChangeBgButton = styled.button`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  border: none;
  background-color: transparent;
  color: var(--off-white-color);
  font-size: 2rem;
  :hover {
    cursor: pointer;
  }
`;
