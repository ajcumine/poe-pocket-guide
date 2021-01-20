import React from 'react';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

import Page from '../components/Page';
import campaignData from '../data/campaign';

const Home = () => (
  <Page>
    <Typography variant="h1">Campaign</Typography>
    <Typography>
      Step by step guide to leveling throught Path of Exile campaign:
    </Typography>
    <Box boxShadow={3}>
      {Object.keys(campaignData).map((actNumber) => (
        <Accordion key={actNumber}>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography>Act {actNumber}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              {Object.keys(campaignData[actNumber]).map((stepNumber) => (
                <ListItem key={`step-${stepNumber}`}>
                  <ListItemText>
                    {stepNumber}.{' '}
                    {campaignData[actNumber][stepNumber].description}
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  </Page>
);

export default Home;
