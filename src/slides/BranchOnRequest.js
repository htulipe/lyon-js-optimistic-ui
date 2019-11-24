import React from 'react';
import { TitleSlide, Step } from 'react-presents';

export const BranchOnRequest = () => {
  return (
    <TitleSlide>
      <h1>Et l'optimistic dans tout ça?</h1>
      <Step index={1}>
        <p>Grosso modo, se brancher sur REQUEST plutôt que sur SUCCESS</p>
      </Step>
    </TitleSlide>
  );
};
