import React from 'react';
import { Step, ContentSlide } from 'react-presents';

export const ReduxActions = () => {
  return (
    <ContentSlide>
      <h1>Les actions Redux</h1>
      <ul>
        <Step index={1}>
          <li>Une requête Ajax, trois actions</li>
        </Step>
        <Step index={2}>
          <li>CREATE_OPINION_REQUEST</li>
        </Step>
        <Step index={3}>
          <li>CREATE_OPINION_SUCCESS</li>
        </Step>
        <Step index={4}>
          <li>CREATE_OPINION_FAILURE</li>
        </Step>
        <Step index={5}>
          <li>Idem pour UPDATE et DELETE</li>
        </Step>
        <Step index={6}>
          <li>9 actions au total</li>
        </Step>
      </ul>
    </ContentSlide>
  );
};
