import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/home';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';

import Pagina404 from './pages/error';
import CadastroCategoria from './pages/cadastro/Categoria';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route exact path="/cadastro/video"component={CadastroVideo}/>
      <Route exact path="/cadastro/categoria"component={CadastroCategoria}/>
      <Route component={Pagina404}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);