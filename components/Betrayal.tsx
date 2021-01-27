import React, { useState } from 'react';

import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Grid,
  Paper,
  CardContent,
  FormControlLabel,
  Switch,
} from '@material-ui/core';
import { green, yellow, red } from '@material-ui/core/colors';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';

import betrayalData from '../data/betrayal';
import { BetrayalAgentEffect } from '../data/types';

const opinionIcon = (quality: BetrayalAgentEffect['quality']) => {
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

const Betrayal = () => {
  const [showOpinion, setShowOpinion] = useState(true);

  const toggleShowOpinion = () => setShowOpinion(!showOpinion);

  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
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
                    <Switch
                      checked={showOpinion}
                      onChange={toggleShowOpinion}
                    />
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
      </Grid>
      <Grid item>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Transportation</TableCell>
                <TableCell>Fortification</TableCell>
                <TableCell>Research</TableCell>
                <TableCell>Intervention</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {betrayalData.map((row) => (
                <TableRow key={row.name}>
                  <TableCell>{row.name}</TableCell>
                  <BetrayalTableCell
                    showOpinion={showOpinion}
                    effect={row.transportation.effect}
                    quality={row.transportation.quality}
                  />
                  <BetrayalTableCell
                    showOpinion={showOpinion}
                    effect={row.fortification.effect}
                    quality={row.fortification.quality}
                  />
                  <BetrayalTableCell
                    showOpinion={showOpinion}
                    effect={row.research.effect}
                    quality={row.research.quality}
                  />
                  <BetrayalTableCell
                    showOpinion={showOpinion}
                    effect={row.intervention.effect}
                    quality={row.intervention.quality}
                  />
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default Betrayal;
