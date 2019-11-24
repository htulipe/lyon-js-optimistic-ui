import React from 'react';
import { ContentSlide, Code, Step } from 'react-presents';

const dimLines = {
  0: [[1, 6]],
  1: [[2, 6]],
  2: []
};

const sample = `disptach({
    type: UPDATE_OPINION_REQUEST, 
    payload: {
        opinionId: "Opinion:2367"
        newRating: 4,
        entityId: "Movie:12345",
    }
});`;

const dimLines2 = {
  4: [[1, 6]],
  5: [[4, 4]],
  6: []
};

const sample2 = `// all
switch (type) {
    // ...
    case UPDATE_OPINION_REQUEST: {
        state[payload.opinionId].value = payload.newRating;
    }
}`;

export const UpdateOpinion = ({ stepIndex }) => {
  return (
    <ContentSlide>
      <h1>Mise à jour d'une note</h1>
      <Code
        value={sample}
        dimLines={dimLines[stepIndex]}
        codeMirrorOptions={{ lineNumbers: true }}
      />
      <Step index={3}>
        <br />
        <p>
          Rien à modifier dans{' '}
          <span className="monospace">actionsPerEntity</span>
        </p>
      </Step>
      <Step index={4}>
        <br />
        <Code
          value={sample2}
          dimLines={dimLines2[stepIndex]}
          codeMirrorOptions={{ lineNumbers: true }}
        />
      </Step>
      <Step index={7}>
        <br />
      </Step>
    </ContentSlide>
  );
};
