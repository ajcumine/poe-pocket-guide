import React from 'react';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  TableBody,
  Typography,
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

import campaignData from '../data/campaign';
import ActStep from './ActStep';

const ActAccordion = () => (
  <Box boxShadow={3}>
    {Object.keys(campaignData).map((actNumber) => (
      <Accordion key={`act-${actNumber}`}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>Act {actNumber}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TableBody>
            {Object.keys(campaignData[actNumber]).map((stepNumber, index) => (
              <ActStep
                key={`step-${stepNumber}`}
                stepNumber={`${index + 1}`}
                stepData={campaignData[actNumber][stepNumber]}
              />
            ))}
          </TableBody>
        </AccordionDetails>
      </Accordion>
    ))}
  </Box>
);

export default ActAccordion;
