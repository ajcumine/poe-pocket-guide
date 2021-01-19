import React from 'react';

import Link from 'next/link';

const AnchorLink = ({ href }: { href: string }) => (
  <Link href={href}>
    <a href={href}>campaign</a>
  </Link>
);

export default AnchorLink;
