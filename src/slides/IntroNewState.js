import React from 'react';
import { TitleSlide, Step } from 'react-presents';

export const IntroNewState = () => {
  return (
    <TitleSlide>
      <p>Un nouveau state Redux</p>
      <Step index={1}>
        <p className="monospace">all</p>
      </Step>
      <Step index={2}>
        <p className="monospace">actionsPerEntity</p>
      </Step>
    </TitleSlide>
  );
};
