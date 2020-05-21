import React from 'react';
import { NavLink } from 'react-router-dom';
import './AppHeader.css';

const AppHeader = () => (
  <header>
    <div className="center-column">
      <h1>Micro Front-End</h1>
    </div>
    <nav>
      <ol className="center-column">
        <li>
          <NavLink to="/home" activeClassName="activeNav">Home</NavLink>
        </li>
        <li>
          <NavLink to="/orders" activeClassName="activeNav">Orders</NavLink>
        </li>
        <li>
          <NavLink to="/appointments" activeClassName="activeNav">Appointments</NavLink>
        </li>
      </ol>
    </nav>
  </header>
);

export default AppHeader;
