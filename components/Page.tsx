import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.main`
  height: 100%;
  font-family: 'Fira Sans';
  display: flex;
  flex-direction: column;
`;

const Page = ({ children }: { children: React.ReactNode }) => (
  <Wrapper>{children}</Wrapper>
);

export default Page;
