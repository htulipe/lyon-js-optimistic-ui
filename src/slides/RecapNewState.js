import React from 'react';
import { TitleSlide, Step } from 'react-presents';

export const RecapNewState = () => {
  return (
    <TitleSlide>
      <h1>Recap</h1>
      <Step index={1}>
        <p>
          Tout est disponible directement dans{' '}
          <span className="monospace">all</span>
        </p>
      </Step>
      <Step index={2}>
        <p>
          Le reste du state fait référence à des objets de{' '}
          <span className="monospace">all</span>
        </p>
      </Step>
      <Step index={3}>
        <p>Découplage state/composant</p>
      </Step>
    </TitleSlide>
  );
};
