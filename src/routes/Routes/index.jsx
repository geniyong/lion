import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from 'routes/Home';

const Routes = ({
  ...props
}) => {
  console.log(props);
  return (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default Routes;
