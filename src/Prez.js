import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import { Presentation, Slide } from 'react-presents';
import { Opening } from './slides/Opening';
import { IntroOuiSpa } from './slides/IntroOuiSpa';
import { IntroOuiRedux } from './slides/IntroOuiRedux';
import { FeatureNeeds } from './slides/FeatureNeeds';
import { IntroNewState } from './slides/IntroNewState';
import { IntroStateAll } from './slides/IntroStateAll';
import { IntroStateAPE } from './slides/IntroStateAPE';
import { MapStateToProps } from './slides/MapStateToProps';
import { RecapNewState } from './slides/RecapNewState';
import { WhatNext } from './slides/WhatNext';
import { ReduxActions } from './slides/ReduxActions';
import { BranchOnRequest } from './slides/BranchOnRequest';
import { UpdateOpinion } from './slides/UpdateOpinion';
import { CreateOpinion } from './slides/CreateOpinion';
import { CreateOpinionReducer } from './slides/CreateOpinionReducer';
import { RecapIndependentUI } from './slides/RecapIndependentUI';
import { DeleteOpinion } from './slides/DeleteOpinion';
import { WhatIfItGoesWrong } from './slides/WhatIfItGoesWrong';
import { UpdateFailure } from './slides/UpdateFailure';
import { CreateFailure } from './slides/CreateFailure';
import { DeleteFailure } from './slides/DeleteFailure';
import { Conclusion } from './slides/Conclusion';
import { ThankYou } from './slides/ThankYou';

import './styles.css';

const Prez = () => {
  useEffect(() => {
    document.title = 'Optimistic UI';
  }, []);

  return (
    <Presentation>
      <Slide component={Opening} />
      <Slide component={IntroOuiSpa} />
      <Slide component={IntroOuiRedux} />
      <Slide component={FeatureNeeds} />
      <Slide component={IntroNewState} />
      <Slide component={IntroStateAll} />
      <Slide component={IntroStateAPE} />
      <Slide component={MapStateToProps} />
      <Slide component={RecapNewState} />
      <Slide component={WhatNext} />
      <Slide component={ReduxActions} />
      <Slide component={BranchOnRequest} />
      <Slide component={UpdateOpinion} />
      <Slide component={CreateOpinion} />
      <Slide component={CreateOpinionReducer} />
      <Slide component={RecapIndependentUI} />
      <Slide component={DeleteOpinion} />
      <Slide component={WhatIfItGoesWrong} />
      <Slide component={UpdateFailure} />
      <Slide component={CreateFailure} />
      <Slide component={DeleteFailure} />
      <Slide component={Conclusion} />
      <Slide component={ThankYou} />
    </Presentation>
  );
};

export default hot(Prez);
