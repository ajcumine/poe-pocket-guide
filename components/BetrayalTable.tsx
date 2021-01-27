import React from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';

import betrayalData from '../data/betrayal';
import BetrayalTableCell from './BetrayalTableCell';

const BetrayalTable = ({ showOpinion }: { showOpinion: boolean }) => (
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell />
          <TableCell>Transportation</TableCell>
          <TableCell>Fortification</TableCell>
          <TableCell>Research</TableCell>
          <TableCell>Intervention</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {betrayalData.map((row) => (
          <TableRow key={row.name}>
            <TableCell>{row.name}</TableCell>
            <BetrayalTableCell
              showOpinion={showOpinion}
              effect={row.transportation.effect}
              quality={row.transportation.quality}
            />
            <BetrayalTableCell
              showOpinion={showOpinion}
              effect={row.fortification.effect}
              quality={row.fortification.quality}
            />
            <BetrayalTableCell
              showOpinion={showOpinion}
              effect={row.research.effect}
              quality={row.research.quality}
            />
            <BetrayalTableCell
              showOpinion={showOpinion}
              effect={row.intervention.effect}
              quality={row.intervention.quality}
            />
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default BetrayalTable;
