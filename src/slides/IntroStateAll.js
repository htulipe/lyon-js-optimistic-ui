import React from 'react';
import { ContentSlide, Code, Step } from 'react-presents';

const dimLines = {
  0: [[1, 19]],
  1: [[6, 19]],
  2: [[9, 19]],
  3: [[12, 19]],
  4: [[17, 19]],
  5: [[20, 19]]
};

const sample = `const all = {
    "Movie:10568": {
        title: "Forrest Gump"
        releaseDate: "5/10/1994"
        ...
    },
    "Movie:22779": {
        ...
    },
    "Movie:9393": {
        ...
    },
    "Opinion:13ZS34": {
        value: 4,
        relatedEntity: "Movie:10568"
        ...
    },
    "WantToSee:24FD32": {
        relatedEntity: "Movie:9393"
    }
}
`;

export const IntroStateAll = ({ stepIndex }) => {
  return (
    <ContentSlide>
      <h1>all</h1>
      <Code
        value={sample}
        dimLines={dimLines[stepIndex]}
        codeMirrorOptions={{ lineNumbers: true }}
      />
      <Step index={6}>
        <br />
      </Step>
    </ContentSlide>
  );
};
