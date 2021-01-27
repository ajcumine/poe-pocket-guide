import React from 'react';

import { Container, GridList, GridListTile } from '@material-ui/core';

import HomepageLink from '../components/HomepageLink';
import Page from '../components/Page';
import PageTitle from '../components/PageTitle';
import UsefulLinks from '../components/UsefulLinks';
import menuItems from '../data/menu';

const Home = () => (
  <Page>
    <Container>
      <PageTitle title="Welcome to the PoE Pocket Guide" />
      <GridList cols={3} spacing={8}>
        {Object.keys(menuItems).map((itemNo) => (
          <GridListTile key={menuItems[itemNo].href}>
            <HomepageLink
              href={menuItems[itemNo].href}
              title={menuItems[itemNo].name}
            />
          </GridListTile>
        ))}
      </GridList>
      <UsefulLinks />
    </Container>
  </Page>
);

export default Home;
