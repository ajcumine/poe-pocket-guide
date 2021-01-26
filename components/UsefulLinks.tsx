import React from 'react';

import { GridList, GridListTile, Typography } from '@material-ui/core';

import HomepageLink from './HomepageLink';

const UsefulLinks = () => (
  <GridList cols={3} spacing={8}>
    <GridListTile cols={3} style={{ height: 'auto' }}>
      <Typography variant="h5">Useful Links:</Typography>
    </GridListTile>
    <GridListTile>
      <HomepageLink
        external
        href="https://www.pathofexile.com/trade"
        title="Official PoE Trade"
      />
    </GridListTile>
    <GridListTile>
      <HomepageLink external href="https://poe.ninja/" title="PoE Ninja" />
    </GridListTile>
    <GridListTile>
      <HomepageLink
        external
        href="https://www.craftofexile.com/"
        title="Craft of Exile"
      />
    </GridListTile>
    <GridListTile>
      <HomepageLink external href="https://poedb.tw/" title="PoEDB" />
    </GridListTile>
  </GridList>
);

export default UsefulLinks;
