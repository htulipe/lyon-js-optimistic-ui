import React from 'react';
import { Step, TitleSlide } from 'react-presents';

export const FeatureNeeds = () => {
  return (
    <TitleSlide>
      <h1>Ce que l'on veut pouvoir faire</h1>
      <Step index={1}>
        <p>Créer/modifier/supprimer une note pour un film donné</p>
      </Step>
    </TitleSlide>
  );
};
