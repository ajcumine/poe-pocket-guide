import React from 'react';

import { Container, Grid } from '@material-ui/core';

import Betrayal from '../components/Betrayal';
import Page from '../components/Page';
import PageTitle from '../components/PageTitle';

const Cheatsheets = () => (
  <Page>
    <Container>
      <PageTitle title="Cheatsheets" />
      <Grid container>
        <Betrayal />
      </Grid>
    </Container>
  </Page>
);

export default Cheatsheets;
