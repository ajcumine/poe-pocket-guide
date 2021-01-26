import React from 'react';

import { Box, Typography } from '@material-ui/core';
import styled from 'styled-components';

const StyledBox = styled(Box)`
  margin: 1.6rem 0 2rem;
`;

const PageTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => (
  <StyledBox>
    <Typography variant="h3">{title}</Typography>
    {subtitle && <Typography variant="subtitle1">{subtitle}</Typography>}
  </StyledBox>
);

export default PageTitle;
