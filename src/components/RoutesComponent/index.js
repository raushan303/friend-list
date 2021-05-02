import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import FreindList from '../FreindList';

function Index() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={FreindList} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

export default Index;
