import React from 'react';

import { TableCell, TableRow } from '@material-ui/core';
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
    <TableCell>{stepNumber}. </TableCell>
    <TableCell>{stepData.description}</TableCell>
  </StyledTableRow>
);

export default ActStep;
