import React from 'react';

import { Card, CardActionArea, CardContent } from '@material-ui/core';

const HomepageLink = ({ title, href }: { title: string; href: string }) => (
  <Card variant="outlined" raised>
    <CardActionArea href={href} target="_blank">
      <CardContent>{title}</CardContent>
    </CardActionArea>
  </Card>
);

export default HomepageLink;
