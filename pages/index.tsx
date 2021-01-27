import React from 'react';

import { Container, GridList, GridListTile } from '@material-ui/core';

import HomepageLink from '../components/HomepageLink';
import Page from '../components/Page';
import PageTitle from '../components/PageTitle';
import UsefulLinks from '../components/UsefulLinks';

const Home = () => (
  <Page>
    <Container>
      <PageTitle title="Welcome to the PoE Pocket Guide" />
      <GridList cols={3} spacing={8}>
        <GridListTile>
          <HomepageLink href="/campaign" title="Leveling Guide" />
        </GridListTile>
        <GridListTile>
          <HomepageLink href="/cheatsheets" title="Cheatsheets" />
        </GridListTile>
      </GridList>
      <UsefulLinks />
    </Container>
  </Page>
);

export default Home;
