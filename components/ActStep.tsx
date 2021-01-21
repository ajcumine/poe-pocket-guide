import React from 'react';

import { Box, ListItemText, TableCell, TableRow } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { Step } from '../data/types';

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const ActStep = ({
  stepNumber,
  stepData,
}: {
  stepNumber: string;
  stepData: Step;
}) => (
  <StyledTableRow>
    <TableCell>
      <ListItemText>{stepNumber}</ListItemText>
    </TableCell>
    <TableCell>
      <ListItemText>
        <Box fontStyle="italic" fontWeight={300}>
          {stepData.optional ? 'optional' : ''}
        </Box>
      </ListItemText>
    </TableCell>
    <TableCell>
      <ListItemText>{stepData.description}</ListItemText>
    </TableCell>
  </StyledTableRow>
);

export default ActStep;
