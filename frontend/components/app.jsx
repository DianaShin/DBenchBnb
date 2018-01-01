import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route } from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';
import {AuthRoute} from '../util/route_util';
import BenchIndex from './benches/bench_index';
import Search from './search/search';

const App = () => (
  <div>
    <header>
      <h1>Welcome to BenchBnB!!!!!!!!!!!!!!!!!!!!</h1>
      <GreetingContainer />
    </header>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <Route exact path="/" component={ Search} />
  </div>
);

export default App;
