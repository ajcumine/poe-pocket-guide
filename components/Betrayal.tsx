import React, { useState } from 'react';

import { Grid } from '@material-ui/core';

import BetrayalCard from './BetrayalCard';
import BetrayalTable from './BetrayalTable';

const Betrayal = () => {
  const [showOpinion, setShowOpinion] = useState(true);

  const toggleShowOpinion = () => setShowOpinion(!showOpinion);

  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <BetrayalCard
          showOpinion={showOpinion}
          toggleShowOpinion={toggleShowOpinion}
        />
      </Grid>
      <Grid item xs={12}>
        <BetrayalTable showOpinion={showOpinion} />
      </Grid>
    </Grid>
  );
};

export default Betrayal;
