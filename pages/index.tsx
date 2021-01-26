import React from 'react';

import {
  Container,
  Grid,
  GridList,
  GridListTile,
  Typography,
} from '@material-ui/core';

import HomepageLink from '../components/HomepageLink';
import Page from '../components/Page';

const Home = () => (
  <Page>
    <Container>
      <Grid container>
        <Grid item>
          <Typography variant="h3">Welcome to the PoE Pocket Guide</Typography>
        </Grid>
      </Grid>
      <GridList cols={3} spacing={8}>
        <GridListTile>
          <HomepageLink
            href="https://www.pathofexile.com/trade"
            title="Official PoE Trade"
          />
        </GridListTile>
        <GridListTile>
          <HomepageLink href="https://poe.ninja/" title="PoE Ninja" />
        </GridListTile>
        <GridListTile>
          <HomepageLink
            href="https://www.craftofexile.com/"
            title="Craft of Exile"
          />
        </GridListTile>
        <GridListTile>
          <HomepageLink href="https://poedb.tw/" title="PoEDB" />
        </GridListTile>
      </GridList>
    </Container>
  </Page>
);

export default Home;
