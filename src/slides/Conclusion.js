import React from 'react';
import { ContentSlide, Step } from 'react-presents';

export const Conclusion = () => {
  return (
    <ContentSlide>
      <h1>En conclusion</h1>
      <ul>
        <Step index={1}>
          <li>C'est la modélisation du state qui facilite l'optimistic UI</li>
        </Step>
        <Step index={2}>
          <li>Des cas plus simples comme pour le bouton "Envie de voir"...</li>
        </Step>
        <Step index={3}>
          <li>... mais ce n'est jamais aussi simple que l'on imagine</li>
        </Step>
        <Step index={4}>
          <li>On n'échappe pas à quelques tricks</li>
        </Step>
        <Step index={5}>
          <li>Pas mal de cas par cas</li>
        </Step>
        <Step index={6}>
          <li>A utiliser avec discernement</li>
        </Step>
      </ul>
    </ContentSlide>
  );
};
