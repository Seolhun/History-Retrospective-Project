import React from 'react';

import { Switch, Route } from 'react-router-dom';

import HomeView from '../container/home/HomeView'
import TableScrollView from '../container/table/TableScrollView'
import TablePaginationView from '../container/table/TablePaginationView'
import NotFoundView from '../container/common/NotFoundView'

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route
          exact path='/' component={HomeView}
        />
        <Route path='/scroll' component={TableScrollView}/>
        <Route path='/pagination' component={TablePaginationView}/>
				<Route path='*' exact={true} component={NotFoundView} />
      </Switch>
    </div>
  );
}

export default Routes;
