import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppHeader from './AppHeader';
import { MicroFrontend } from './MicroFrontend';

const App = () => {
  const ordersHost = process.env.REACT_APP_ORDERS_HOST;
  const appointmentsHost = process.env.REACT_APP_APPOINTMENTS_HOST;

  const Orders = ({ history }) => (
    <MicroFrontend history={history} host={ordersHost} name="Orders" />
  );

  const Appointments = ({ history }) => (
    <MicroFrontend history={history} host={appointmentsHost} name="Appointments" />
  );

  const Home = () => {
    return (
      <div>
        <span>
          Welcome to Micro Front-End App Demo
        </span>
      </div>
    );
  };

  return (
    <BrowserRouter>
      <React.Fragment>
        <AppHeader />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/orders" component={Orders} />
          <Route exact path="/appointments" component={Appointments} />
          <Route exact path="/" component={Home} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;
