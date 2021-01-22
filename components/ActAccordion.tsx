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
  levelingOptions: { showOptional, showTrials, showPassives },
}: {
  levelingOptions: {
    showOptional: boolean;
    showTrials: boolean;
    showPassives: boolean;
  };
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
                const stepData = campaignData[actNumber][stepNumber];
                if (!showOptional && stepData.optional) {
                  return null;
                }

                if (!showTrials && stepData.labyrinth) {
                  return null;
                }

                if (!showPassives && stepData.passives) {
                  return null;
                }

                return (
                  <ActStep key={`step-${stepNumber}`} stepData={stepData} />
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
