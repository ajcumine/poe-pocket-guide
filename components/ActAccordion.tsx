import React from 'react';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Table,
  TableBody,
  Typography,
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

import campaignData from '../data/campaign';
import ActStep from './ActStep';

const ActAccordion = ({
  levelingOptions: { showOptional },
}: {
  levelingOptions: { showOptional: boolean };
}) => (
  <Box boxShadow={3}>
    {Object.keys(campaignData).map((actNumber) => (
      <Accordion key={`act-${actNumber}`}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>Act {actNumber}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Table size="small">
            <TableBody>
              {Object.keys(campaignData[actNumber]).map((stepNumber) => {
                if (
                  !showOptional &&
                  campaignData[actNumber][stepNumber].optional
                ) {
                  return null;
                }
                return (
                  <ActStep
                    key={`step-${stepNumber}`}
                    stepData={campaignData[actNumber][stepNumber]}
                  />
                );
              })}
            </TableBody>
          </Table>
        </AccordionDetails>
      </Accordion>
    ))}
  </Box>
);

export default ActAccordion;
