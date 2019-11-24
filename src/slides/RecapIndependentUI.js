import React from 'react';
import { ContentSlide, Code, Step } from 'react-presents';

const sample = `const mapStateToProps = (ownProps) => {
    const entity = state.all[ownProps.entityId];
    // opinionId vaut un entier aléatoire puis un vrai id
    const opinionId = state.actionsPerEntity[ownProps.entityId].opinion;
    const opinion = state.all[opinionId];
    return {
        entity: entity,
        opinion: opinion
    }
}`;

export const RecapIndependentUI = () => {
  return (
    <ContentSlide>
      <h1>Les composants restent ignorants</h1>
      <Step index={1}>
        <Code value={sample} codeMirrorOptions={{ lineNumbers: true }} />
      </Step>
    </ContentSlide>
  );
};
