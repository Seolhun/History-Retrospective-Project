import React from 'react';

import { Switch, Route } from 'react-router-dom';

import routes from './schema';

const Routes = () => {
  return (
    <div>
      <Switch>
				{
					routes.map((route) => {
						return <Route key={route.label} path={route.path} exact={route.exact} component={route.component}/>
					})
				}
      </Switch>
    </div>
  );
}

export default Routes;
