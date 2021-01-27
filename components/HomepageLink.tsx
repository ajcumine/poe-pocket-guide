import React from 'react';

import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from '@material-ui/core';
import Link from 'next/link';

const InternalLink = ({ title, href }: { title: string; href: string }) => (
  <Link href={href} passHref>
    <Card variant="outlined" raised>
      <CardActionArea>
        <CardContent>
          <Typography variant="h5">{title}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Link>
);

const HomepageLink = ({
  title,
  href,
  external = false,
}: {
  title: string;
  href: string;
  external?: boolean;
}) =>
  external ? (
    <Card variant="outlined" raised>
      <CardActionArea href={href} target={external ? '_blank' : undefined}>
        <CardContent>
          <Typography variant="h5">{title}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  ) : (
    <InternalLink title={title} href={href} />
  );

export default HomepageLink;
