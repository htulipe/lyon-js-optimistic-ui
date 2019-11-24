import React from 'react';
import ContentSlide from 'react-presents/dist/commonjs/ContentSlide';
import { Code, Step } from 'react-presents';

const dimLines = {
  0: [[1, 9]],
  1: [
    [1, 1],
    [8, 9]
  ]
};

const sample = `// all
switch (type) {
    case CREATE_OPINION_REQUEST: {
        state[payload.transactionId] = {
            value: payload.rating,
            relatedEntity: payload.entityId
        }
    }
}`;

const dimLines2 = {
  3: [[1, 6]],
  4: [
    [1, 1],
    [5, 6]
  ]
};

const sample2 = `// actionsPerEntity
switch (type) {
    case CREATE_OPINION_REQUEST: {
        state[payload.entityId].opinion = payload.transactionId
    }
}`;

export const CreateOpinionReducer = ({ stepIndex }) => {
  return (
    <ContentSlide>
      <h1>Création d'une note</h1>
      <Code
        value={sample}
        dimLines={dimLines[stepIndex]}
        codeMirrorOptions={{ lineNumbers: true }}
      />
      <Step index={3}>
        <br />
        <Code
          value={sample2}
          dimLines={dimLines2[stepIndex]}
          codeMirrorOptions={{ lineNumbers: true }}
        />
      </Step>
      <Step index={5}>
        <br />
        <p>Penser à "nettoyer" sur l'action SUCCESS</p>
      </Step>
    </ContentSlide>
  );
};
