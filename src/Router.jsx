import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './views/Home';
import DashboardPatient from './views/DashboardPatient';
import DashboardMedecin from './views/DashboardMedecin';
import OrdonnanceCreation from './views/OrdonnanceCreation';
import MyPatients from './views/MyPatients';

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/dashboard-medecin' component={DashboardMedecin} />
        <Route path='/dashboard-patient' component={DashboardPatient} />
        <Route path='/ordonnance-creation' component={OrdonnanceCreation} />
        <Route path='/patients' component={MyPatients} />
      </Switch>
    </Router>
  );
}
