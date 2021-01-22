import React from 'react';

import { Container, Grid, Typography } from '@material-ui/core';

import Page from '../components/Page';

const Home = () => (
  <Page>
    <Container>
      <Grid container>
        <Typography variant="h3">Welcome to the PoE Pocket Guide</Typography>
      </Grid>
    </Container>
  </Page>
);

export default Home;
