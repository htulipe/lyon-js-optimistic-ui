import React from 'react';
import { ContentSlide, Code, Step } from 'react-presents';

const sample = `// all
switch (type) {
    case CREATE_OPINION_FAILURE: {
        delete state[payload.transactionId]
    }
}`;

const sample2 = `// actionsPerEntity
switch (type) {
    case CREATE_OPINION_FAILURE: {
        state[payload.entityId].opinion = null;
    }
}`;

export const CreateFailure = () => {
  return (
    <ContentSlide>
      <h1>Echec de la création d'une note (transactionId)</h1>
      <Step index={1}>
        <Code value={sample} codeMirrorOptions={{ lineNumbers: true }} />
      </Step>
      <Step index={2}>
        <br />
        <Code value={sample2} codeMirrorOptions={{ lineNumbers: true }} />
      </Step>
    </ContentSlide>
  );
};
