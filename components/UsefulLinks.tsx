import React from 'react';

import { GridList, GridListTile, Typography } from '@material-ui/core';

import usefulLinks from '../data/usefulLinks';
import HomepageLink from './HomepageLink';

const UsefulLinks = () => (
  <GridList cols={3} spacing={8}>
    <GridListTile cols={3} style={{ height: 'auto' }}>
      <Typography variant="h5">Useful Links:</Typography>
    </GridListTile>
    {Object.keys(usefulLinks).map((linkNo) => (
      <GridListTile key={usefulLinks[linkNo].name}>
        <HomepageLink
          external
          href={usefulLinks[linkNo].href}
          title={usefulLinks[linkNo].name}
        />
      </GridListTile>
    ))}
  </GridList>
);

export default UsefulLinks;
