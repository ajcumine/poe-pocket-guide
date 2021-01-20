import React from 'react';

import styled from 'styled-components';

import styles from '../styles/variables';

const PageWrapper = styled.main`
  background-color: ${styles.colors.purple};
  font-family: 'Roboto';
  color: ${styles.colors.white};
  position: relative;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  flex: 1 0 auto;
  padding-bottom: 8rem;
  margin: 0 1.6rem;
  @media (min-width: ${styles.size.tablet}) {
    max-width: 860px;
    margin: 0 auto;
    width: 100%;
  }
  @media (min-width: ${styles.size.desktop}) {
    max-width: 1100px;
  }
`;

const Footer = styled.footer`
  background-color: ${styles.colors.darkPurple};
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 5rem;
`;

const Page = ({ children }: { children: React.ReactNode }) => (
  <PageWrapper>
    <ContentWrapper>{children}</ContentWrapper>
    <Footer />
  </PageWrapper>
);

export default Page;
