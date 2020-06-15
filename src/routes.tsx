import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Registro from './pages/Registro';
import Dashboard from './pages/Dashboard';
import Historico from './pages/Historico';
import Ranking from './pages/Ranking';
import Match from './pages/Match';
import Torneios from './pages/Torneios';
import Equipes from './pages/Equipes';

const Routes = () => (
  <BrowserRouter>
    <Route component={Home} path="/" exact />
    <Route component={Registro} path="/register" />
    <Route component={Match} path="/match" />
    <Route component={Ranking} path="/ranking" />
    <Route component={Dashboard} path="/dashboard" />
    <Route component={Historico} path="/historico" />
    <Route component={Equipes} path="/equipes" />
    <Route component={Torneios} path="/torneios" />
  </BrowserRouter>
);

export default Routes;
