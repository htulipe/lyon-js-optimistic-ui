import React from 'react';
import ContentSlide from 'react-presents/dist/commonjs/ContentSlide';
import { Code, Step } from 'react-presents';

const sample = `disptach({
    type: CREATE_OPINION_REQUEST, 
    payload: {
        rating: 4,
        entityId: "Movie:12345",
    }
});`;

const sample2 = `disptach({
    type: CREATE_OPINION_REQUEST, 
    payload: {
        rating: 4,
        entityId: "Movie:12345",
        transactionId: Math.floor(Math.random() * -100000)
    }
});`;

const dimLines = {
  2: [
    [0, 4],
    [6, 7]
  ]
};

export const CreateOpinion = ({ stepIndex }) => {
  return (
    <ContentSlide>
      <h1>Création d'une note</h1>
      <Code value={sample} codeMirrorOptions={{ lineNumbers: true }} />
      <Step index={1}>
        <br />
        <p>Il faut créer un objet avec un id temporaire</p>
      </Step>
      <Step index={2}>
        <Code
          value={sample2}
          dimLines={dimLines[stepIndex]}
          codeMirrorOptions={{ lineNumbers: true }}
        />
      </Step>
    </ContentSlide>
  );
};
