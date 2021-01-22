import React from 'react';

import {
  Box,
  Checkbox,
  ListItemText,
  TableCell,
  TableRow,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { Step } from '../data/types';

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const SecondaryText = ({ stepData }: { stepData: Step }) =>
  stepData.optional ? <Box fontStyle="italic">optional</Box> : null;

const ActStep = ({ stepData }: { stepData: Step }) => (
  <StyledTableRow>
    <TableCell>
      <Checkbox />
    </TableCell>
    <TableCell>
      <ListItemText secondary={<SecondaryText stepData={stepData} />}>
        {stepData.description}
      </ListItemText>
    </TableCell>
  </StyledTableRow>
);

export default ActStep;
