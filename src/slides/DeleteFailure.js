import React from 'react';
import { ContentSlide, Step, Code } from 'react-presents';

const sample = `// all
case DELETE_OPINION_REQUEST: {
    state[payload.opinionId].isDeleted = true;
}`;

const sample2 = `const mapStateToProps = (ownProps) => {
    const entity = state.all[ownProps.entityId];
    const opinionId = state.actionsPerEntity[ownProps.entityId].opinion;
    const opinion = state.all[opinionId];
    return {
        entity: entity,
        opinion: opinion.isDeleted ? null : opinion
    }
}`;

const sample3 = `// all
case DELETE_OPINION_FAILURE: {
    state[payload.opinionId].isDeleted = false;
}`;

export const DeleteFailure = ({ stepIndex }) => {
  return (
    <ContentSlide>
      <h1>Echec de la suppression</h1>
      <Step index={1}>
        <p>
          Il faudrait éviter de supprimer l'objet sur DELETE_OPINION_REQUEST
        </p>
      </Step>
      <Step index={2}>
        <Code value={sample} codeMirrorOptions={{ lineNumbers: true }} />
        <br />
      </Step>
      <Step index={3}>
        <p>Attention. Il faut modifier mapStateToProps</p>
      </Step>
      <Step index={4}>
        <Code
          value={sample2}
          dimLines={[
            [0, 5],
            [7, 8]
          ]}
          codeMirrorOptions={{ lineNumbers: true }}
        />
        <br />
      </Step>
      <Step index={5}>
        <Code value={sample3} codeMirrorOptions={{ lineNumbers: true }} />
        <br />
      </Step>
    </ContentSlide>
  );
};
