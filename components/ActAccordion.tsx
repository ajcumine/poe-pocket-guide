import React from 'react';

import styled from 'styled-components';

import { Step } from '../data/types';

const AccordionButton = styled.button`
  /* cursor: pointer; */
  padding: 1.2rem;
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
  /* transition: 0.4s; */
`;

const AccordionContents = styled.div`
  /* display: none;
  overflow: hidden; */
`;

const ActAccordion = ({
  actNumber,
  actData,
}: {
  actNumber: string;
  actData: Step;
}) => (
  <section>
    <AccordionButton type="button">Act {actNumber}</AccordionButton>
    <AccordionContents>
      {Object.keys(actData).map((stepNumber) => (
        <p key={`step-${stepNumber}`}>
          {stepNumber}. <span>{actData[stepNumber].description}</span>
        </p>
      ))}
    </AccordionContents>
  </section>
);

export default ActAccordion;
