import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import AboutPage from './AboutPage';
import ContactPage from './ContactPage';

const Main = () => (
  <main id="main">
    <Switch>
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
    </Switch>
  </main>
);
export default Main;
