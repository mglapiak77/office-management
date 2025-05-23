import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Reservations from './pages/Reservations';
import Rooms from './pages/Rooms';
import RoomDetails from './pages/RoomDetails';
import Employees from './pages/Employees';
import EmployeeDetails from './pages/EmployeeDetails';
import Resources from './pages/Resources';
import Issues from './pages/Issues';
import IssueDetails from './pages/IssueDetails';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/reservations" component={Reservations} />
          <Route exact path="/rooms" component={Rooms} />
          <Route path="/rooms/:id" component={RoomDetails} />
          <Route exact path="/employees" component={Employees} />
          <Route path="/employees/:id" component={EmployeeDetails} />
          <Route exact path="/resources" component={Resources} />
          <Route exact path="/issues" component={Issues} />
          <Route path="/issues/:id" component={IssueDetails} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
