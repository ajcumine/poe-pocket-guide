import React, { useState } from 'react';

import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Switch,
} from '@material-ui/core';

import ActAccordion from '../components/ActAccordion';
import Page from '../components/Page';

const Campaign = () => {
  const [levelingOptions, setLevelingOptions] = useState({
    showOptional: true,
  });
  const handleOptionalChange = () =>
    setLevelingOptions({
      ...levelingOptions,
      showOptional: !levelingOptions.showOptional,
    });
  return (
    <Page>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h1">Campaign</Typography>
          <Typography variant="subtitle1">
            Step by step guide to leveling throught Path of Exile campaign:
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Card variant="outlined">
            <CardContent>
              <Grid container spacing={3}>
                <Grid item>
                  <Typography>Show optional quests</Typography>
                  <Switch
                    checked={levelingOptions.showOptional}
                    onChange={handleOptionalChange}
                  />
                </Grid>
                <Grid item xs>
                  <Typography>
                    <Box fontStyle="italic">
                      It is highly suggested that on your first playthrough you
                      show all optional quests. They reward passive skill
                      points, gem purchases, flask rewards, and the labyrinth
                      unlocks via labyrinth trials.
                    </Box>
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <ActAccordion levelingOptions={levelingOptions} />
        </Grid>
      </Grid>
    </Page>
  );
};

export default Campaign;
