import React from 'react';

import { TableCell, Grid } from '@material-ui/core';
import { green, yellow, red } from '@material-ui/core/colors';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';

import { BetrayalAgentEffect } from '../data/types';

export const opinionIcon = (quality: BetrayalAgentEffect['quality']) => {
  switch (quality) {
    case 'great':
      return (
        <SentimentVerySatisfiedIcon
          fontSize="small"
          style={{ color: green[500] }}
        />
      );
    case 'good':
      return (
        <SentimentSatisfiedAltIcon
          fontSize="small"
          style={{ color: yellow[500] }}
        />
      );
    case 'neutral':
      return <SentimentSatisfiedIcon fontSize="small" />;
    case 'bad':
      return (
        <SentimentVeryDissatisfiedIcon
          fontSize="small"
          style={{ color: red[500] }}
        />
      );
    default:
      return null;
  }
};

const BetrayalTableCell = ({
  effect,
  quality,
  showOpinion,
}: BetrayalAgentEffect & { showOpinion: boolean }) => (
  <TableCell>
    <Grid container spacing={1}>
      {showOpinion && <Grid item>{opinionIcon(quality)}</Grid>}
      <Grid item>{effect}</Grid>
    </Grid>
  </TableCell>
);

export default BetrayalTableCell;
