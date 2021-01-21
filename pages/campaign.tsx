import React from 'react';

import { Typography } from '@material-ui/core';

import ActAccordion from '../components/ActAccordion';
import Page from '../components/Page';

const Campaign = () => (
  <Page>
    <Typography variant="h1">Campaign</Typography>
    <Typography variant="subtitle1">
      Step by step guide to leveling throught Path of Exile campaign:
    </Typography>
    <ActAccordion />
  </Page>
);

export default Campaign;
