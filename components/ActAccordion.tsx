import React from 'react';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Table,
  TableBody,
  Typography,
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

import actNotes from '../data/actNotes';
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
          <Grid container>
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
            <Box fontStyle="italic" p={3}>
              <Typography>{actNotes[actNumber]}</Typography>
            </Box>
          </Grid>
        </AccordionDetails>
      </Accordion>
    ))}
  </Box>
);

export default ActAccordion;
