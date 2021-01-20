import React from 'react';

import { Container } from '@material-ui/core';
import styled from 'styled-components';

import styles from '../styles/variables';

const PageWrapper = styled.main`
  background-color: ${styles.colors.purple};
  font-family: 'Roboto';
  color: ${styles.colors.white};
  position: relative;
  min-height: 100vh;
`;

const StyledContainer = styled(Container)`
  padding-bottom: 5rem;
`;

const Page = ({
  children,
}: {
  children: React.ReactNodeArray | React.ReactElement;
}) => (
  <PageWrapper>
    <StyledContainer>{children}</StyledContainer>
  </PageWrapper>
);

export default Page;
