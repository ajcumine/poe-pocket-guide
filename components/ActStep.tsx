import React from 'react';

import { ListItem, ListItemText, Typography } from '@material-ui/core';

import { Step } from '../data/types';

const ActStep = ({
  stepNumber,
  stepData,
}: {
  stepNumber: string;
  stepData: Step;
}) => (
  <ListItem>
    <Typography>{stepNumber}. </Typography>
    <ListItemText inset>{stepData.description}</ListItemText>
  </ListItem>
);

export default ActStep;
