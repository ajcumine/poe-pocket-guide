import React from 'react';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  List,
  Typography,
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

import campaignData from '../data/campaign';
import ActStep from './ActStep';

const ActAccordion = () => (
  <Box boxShadow={3}>
    {Object.keys(campaignData).map((actNumber) => (
      <Accordion key={actNumber}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>Act {actNumber}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            {Object.keys(campaignData[actNumber]).map((stepNumber) => (
              <ActStep
                key={`step-${stepNumber}`}
                stepNumber={stepNumber}
                stepData={campaignData[actNumber][stepNumber]}
              />
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
    ))}
  </Box>
);

export default ActAccordion;
