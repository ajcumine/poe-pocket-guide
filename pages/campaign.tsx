import React, { useState } from 'react';

import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Switch,
  FormGroup,
  FormControlLabel,
} from '@material-ui/core';

import ActAccordion from '../components/ActAccordion';
import Page from '../components/Page';
import PageTitle from '../components/PageTitle';

const Campaign = () => {
  const [levelingOptions, setLevelingOptions] = useState({
    showOptional: true,
    showTrials: true,
    showPassives: true,
  });

  const handleOptionalChange = () =>
    setLevelingOptions({
      ...levelingOptions,
      showOptional: !levelingOptions.showOptional,
    });

  const handleTrialsChange = () =>
    setLevelingOptions({
      ...levelingOptions,
      showTrials: !levelingOptions.showTrials,
    });

  const handlePassivesChange = () =>
    setLevelingOptions({
      ...levelingOptions,
      showPassives: !levelingOptions.showPassives,
    });

  return (
    <Page>
      <PageTitle
        title="Leveling Guide"
        subtitle="Step by step guide to leveling through the Path of Exile campaign:"
      />
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Card variant="outlined">
            <CardContent>
              <Grid container spacing={3}>
                <Grid item>
                  <FormGroup>
                    <Typography>Quest filtering options:</Typography>
                    <FormControlLabel
                      label="Optional quests"
                      control={
                        <Switch
                          checked={levelingOptions.showOptional}
                          onChange={handleOptionalChange}
                        />
                      }
                    />
                    <FormControlLabel
                      label="Labyrinth trials"
                      control={
                        <Switch
                          checked={levelingOptions.showTrials}
                          onChange={handleTrialsChange}
                        />
                      }
                    />
                    <FormControlLabel
                      label="Skill point quests"
                      control={
                        <Switch
                          checked={levelingOptions.showPassives}
                          onChange={handlePassivesChange}
                        />
                      }
                    />
                  </FormGroup>
                </Grid>
                <Grid item xs>
                  <Typography>
                    <Box fontStyle="italic">
                      It is highly suggested that you show all optional quests
                      on your first playthrough . They reward passive skill
                      points, gem purchases, flask rewards, and unlock labyrinth
                      difficulties via labyrinth trials.
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
