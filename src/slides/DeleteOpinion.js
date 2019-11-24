import React from 'react';
import { ContentSlide, Code, Step } from 'react-presents';

const sample = `disptach({
    type: DELETE_OPINION_REQUEST, 
    payload: {
        opinionId: "Opinion:12DFE",
        entityId: "Movie:12345",
    }
});`;

const sample2 = `// actionPerEntity
swicth(type) {
    case DELETE_OPINION_REQUEST: {
        state[payload.entityId].opinion = null
    }
}`;

const sample3 = `// all
swicth(type) {
    case DELETE_OPINION_REQUEST: {
        delete state[payload.opinionId];
    }
}`;

export const DeleteOpinion = () => {
  return (
    <ContentSlide>
      <h1>Suppression d'une note</h1>
      <Code value={sample} codeMirrorOptions={{ lineNumbers: true }} />
      <Step index={1}>
        <br />
        <Code value={sample2} codeMirrorOptions={{ lineNumbers: true }} />
      </Step>
      <Step index={2}>
        <br />
        <Code value={sample3} codeMirrorOptions={{ lineNumbers: true }} />
      </Step>
    </ContentSlide>
  );
};
