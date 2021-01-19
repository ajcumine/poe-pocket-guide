import React from 'react';

import Page from '../components/Page';
import campaignData from '../data/campaign';

const Home = () => (
  <Page>
    <h1>Campaign</h1>
    <p>Step by step guide to leveling throught Path of Exile campaign:</p>
    {Object.keys(campaignData).map((actNo) => (
      <section>
        <h2>Act {actNo}</h2>
        {Object.keys(campaignData[actNo]).map((actSteps) => (
          <p>
            {actSteps}. <span>{campaignData[actNo][actSteps].description}</span>
          </p>
        ))}
      </section>
    ))}
  </Page>
);

export default Home;
