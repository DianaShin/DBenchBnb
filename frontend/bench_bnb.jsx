import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

import {login, logout, signup } from './util/session_api_util';
import configureStore from './store/store';
import * as sessionUtil from './util/session_api_util';
import * as benchUtil from './util/bench_api_util';
import {fetchBenches } from './actions/bench_actions';


window.login = login;
window.logout = logout;
window.signup = signup;


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.benchUtil = benchUtil;
  window.fetchBenches = () => {
    fetchBenches()(store.dispatch);
  };
  window.fetchBenches= fetchBenches;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});







// The below breaks all rendering for me because window doesn't have access to getState().
// document.addEventListener('DOMContentLoaded', () => {
//   const root = document.getElementById('root');
  // let store;
  // if (window.currentUser) {
  //   const preloadedState = { session: { currentUser: window.currentUser } };
  //   store = configureStore(preloadedState);
  //   delete window.currentUser;
  // } else {
  //   store = configureStore();
  // }
//   ReactDOM.render(<Root store={store}></Root>, root);
// });
