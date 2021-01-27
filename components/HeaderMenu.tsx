import React, { useState } from 'react';

import {
  Drawer,
  IconButton,
  List,
  ListItemText,
  ListItem,
  ListItemIcon,
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'next/link';

const HeaderMenu = () => {
  const [showDrawer, toggleDrawer] = useState(false);

  const handleDrawerToggle = () => toggleDrawer(!showDrawer);

  return (
    <>
      <IconButton edge="start" aria-label="menu" onClick={handleDrawerToggle}>
        <MenuIcon />
      </IconButton>
      <Drawer open={showDrawer} anchor="left" onClose={handleDrawerToggle}>
        <List>
          <Link href="/" passHref>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItem>
          </Link>
          <Link href="/campaign" passHref>
            <ListItem button>
              <ListItemText>Leveling Guide</ListItemText>
            </ListItem>
          </Link>
          <Link href="/cheatsheets" passHref>
            <ListItem button>
              <ListItemText>Cheatsheets</ListItemText>
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </>
  );
};

export default HeaderMenu;
