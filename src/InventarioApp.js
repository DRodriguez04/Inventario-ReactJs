import React from 'react'
import { Navegacion } from './components/ui/Navegacion'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { ViewInventario } from './components/inventario/ViewInventario';
import { ViewUsuario } from './components/usuario/ViewUsuario.js'
import { ViewMarca } from './components/marca/ViewMarca.js'
import { ViewEstado } from './components/estado/ViewEstado';
import { ViewTipo } from './components/tipo/ViewTipo.js'

export const InventarioApp = () => {
  return <Router>
        <Navegacion/>
        <Switch>
          <Route exact path="/" component={ViewInventario}/>
          <Route exact path="/usuarios" component={ViewUsuario}/>
          <Route exact path="/marcas" component={ViewMarca}/>
          <Route exact path="/estados" component={ViewEstado}/>
          <Route exact path="/tipos" component={ViewTipo}/>
          <Redirect to="/"/>
        </Switch>
  </Router>
}

