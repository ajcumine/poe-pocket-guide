import React, { useState } from 'react';

import styled from 'styled-components';

import { Step } from '../data/types';
import styles from '../styles/variables';

const AccordionWrapper = styled.section`
  margin-bottom: 2.4rem;
`;

const AccordionButton = styled.button`
  cursor: pointer;
  padding: 1.2rem;
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
  transition: 0.4s;
  background-color: ${styles.colors.darkPurple};
  color: ${styles.colors.white};
`;

interface AccordionContentsProps {
  readonly open: boolean;
}

const AccordionContents = styled.div<AccordionContentsProps>`
  display: ${(props) => (props.open ? 'block' : 'none')};
  overflow: hidden;
  background-color: ${styles.colors.blue};
  padding: 2rem;
`;

const ActAccordion = ({
  actNumber,
  actData,
}: {
  actNumber: string;
  actData: Step;
}) => {
  const [open, setOpen] = useState(true);
  return (
    <AccordionWrapper>
      <AccordionButton type="button" onClick={() => setOpen(!open)}>
        Act {actNumber}
      </AccordionButton>
      <AccordionContents open={open}>
        {Object.keys(actData).map((stepNumber) => (
          <p key={`step-${stepNumber}`}>
            {stepNumber}. {actData[stepNumber].description}
          </p>
        ))}
      </AccordionContents>
    </AccordionWrapper>
  );
};

export default ActAccordion;
