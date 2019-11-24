import React from 'react';
import { ContentSlide, Code, Step } from 'react-presents';

const dimLines = {
  0: [[1, 8]],
  1: [[5, 8]],
  2: [[9, 8]]
};

const sample = `const actionsPerEntity = {
    "Movie:10568": {
        opinion: "Opinion:13ZS34",
        wanToSee: null,
    },
    "Movie:22779": {
        opinion: null,
        wanToSee: null,
    }
}`;

export const IntroStateAPE = ({ stepIndex }) => {
  return (
    <ContentSlide>
      <h1>actionsPerEntity</h1>
      <Code
        value={sample}
        dimLines={dimLines[stepIndex]}
        codeMirrorOptions={{ lineNumbers: true }}
      />
      <Step index={3}>
        <br />
      </Step>
    </ContentSlide>
  );
};
