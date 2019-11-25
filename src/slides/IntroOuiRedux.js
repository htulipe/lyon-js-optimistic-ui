import React from 'react';
import { ContentSlide, Step } from 'react-presents';

export const IntroOuiRedux = () => {
  return (
    <ContentSlide>
      <h1>Avec Redux</h1>
      <br />
      <Step index={1}>
        <iframe
          src="http://www.allocine.fr/film/fichefilm_gen_cfilm=258374.html#no-ads"
          width="100%"
          height="500"
        ></iframe>
      </Step>
    </ContentSlide>
  );
};
