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

import menuItems from '../data/menu';

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
          {Object.keys(menuItems).map((itemNo) => (
            <Link
              key={menuItems[itemNo].href}
              href={menuItems[itemNo].href}
              passHref
            >
              <ListItem button>
                <ListItemText>{menuItems[itemNo].name}</ListItemText>
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default HeaderMenu;
