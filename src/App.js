import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Switch, Route } from 'react-router-dom';

import { Home, Meetup } from './pages';

function App() {
  return (
    <div>
      <CssBaseline />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/meetup/:group" component={Meetup} />
      </Switch>
    </div>
  );
}

export default App;
