import React from 'react';
import { ContentSlide, Code, Step } from 'react-presents';

const sample = `{ 
    payload: {
        opinionId: "Opinion:2367"
        newRating: 4,
        oldRating: 3,
        entityId: "Movie:12345",
    }
}`;

const sample2 = `// all
swicth(type) {
    case UPDATE_OPINION_FAILURE: {
        state[payload.opinionId].rating = payload.oldRating
    }
}`;

export const UpdateFailure = ({ stepIndex }) => {
  return (
    <ContentSlide>
      <h1>Echec de la mise à jour d'une note</h1>
      <Step index={1}>
        <Code
          value={sample}
          dimLines={[
            [0, 3],
            [5, 7]
          ]}
          codeMirrorOptions={{ lineNumbers: true }}
        />
      </Step>

      <Step index={2}>
        <br />
        <Code value={sample2} codeMirrorOptions={{ lineNumbers: true }} />
      </Step>
    </ContentSlide>
  );
};
