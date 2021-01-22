import React from 'react';

import { AppBar, Toolbar, Typography } from '@material-ui/core';

import HeaderMenu from './HeaderMenu';

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <HeaderMenu />
      <Typography>PoE Pocket Guide</Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
