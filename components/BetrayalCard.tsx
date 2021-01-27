import React from 'react';

import {
  Card,
  Typography,
  Grid,
  CardContent,
  FormControlLabel,
  Switch,
} from '@material-ui/core';

import { BetrayalAgentEffect } from '../data/types';
import { opinionIcon } from './BetrayalTableCell';

const BetrayalCard = ({
  showOpinion,
  toggleShowOpinion,
}: {
  showOpinion: boolean;
  toggleShowOpinion: () => void;
}) => (
  <Card variant="outlined">
    <CardContent>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h5">Betrayal</Typography>
        </Grid>
        <Grid item>
          <FormControlLabel
            label="Show opinions"
            control={
              <Switch checked={showOpinion} onChange={toggleShowOpinion} />
            }
          />
        </Grid>
        <Grid item>
          {['great', 'good', 'neutral', 'bad'].map((opinion) => (
            <Grid key={opinion} container spacing={1}>
              <Grid item>
                {opinionIcon(opinion as BetrayalAgentEffect['quality'])}
              </Grid>
              <Grid item>{opinion}</Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

export default BetrayalCard;
