import React from 'react';
import { ContentSlide, Code, Step } from 'react-presents';

const dimLines = {
  0: [[0, 17]],
  1: [[4, 17]],
  2: [[6, 17]],
  3: [[8, 16]],
  4: [[9, 15]],
  5: [[10, 15]],
  6: [[11, 15]],
  7: [[12, 15]],
  8: []
};

const sample = `const UserRating({ opinion, entity }) => {
    // return JSX 
}

const ConnectedUserRating = connect(mapStateToProps)(UserRating);

<ConnectedUserRating entityId="Movie:10568" />

const mapStateToProps = (ownProps) => {
    const entity = state.all[ownProps.entityId];
    const opinionId = state.actionsPerEntity[ownProps.entityId].opinion;
    const opinion = state.all[opinionId];
    return {
        entity: entity,
        opinion: opinion
    }
}`;

export const MapStateToProps = ({ stepIndex }) => {
  return (
    <ContentSlide>
      <h1>Utilisation de ce state</h1>
      <Code
        value={sample}
        dimLines={dimLines[stepIndex]}
        codeMirrorOptions={{ lineNumbers: true }}
      />
      <Step index={9}>
        <br />
      </Step>
    </ContentSlide>
  );
};
