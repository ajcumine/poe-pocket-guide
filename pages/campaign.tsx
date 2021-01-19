import React from 'react';

import ActAccordion from '../components/ActAccordion';
import Page from '../components/Page';
import campaignData from '../data/campaign';

const Home = () => (
  <Page>
    <h1>Campaign</h1>
    <p>Step by step guide to leveling throught Path of Exile campaign:</p>
    {Object.keys(campaignData).map((actNumber) => (
      <ActAccordion actData={campaignData[actNumber]} actNumber={actNumber} />
    ))}
  </Page>
);

export default Home;
