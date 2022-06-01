import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
  }
`;

export const LayoutWrapper = styled.div`
  background: rgb(240, 240, 240);
  min-height: calc(100vh - 70px);
`;

export const Content = styled.div`
  padding: 25px;
  margin-top: 70px;
`;
