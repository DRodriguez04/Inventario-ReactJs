import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navegacion = () => {
	return <>
			<nav className="navbar navbar-expand-lg bg-light" >
				<div className="container-fluid">
					<a className="navbar-brand" href="#">Inventario IUD</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<NavLink className="nav-link" aria-current="page" to="/" activeClassName='active' exact>
									Activos
								</NavLink>
							</li>

							<li className="nav-item">
								<NavLink className="nav-link" to="/usuarios" activeClassName='active' exact>
									Usuarios
								</NavLink>
							</li>

							<li className="nav-item">
								<NavLink className="nav-link" to="/marcas" activeClassName='active' exact>
									Marcas
								</NavLink>
							</li>

							<li className="nav-item">
								<NavLink className="nav-link" to="/estados" activeClassName='active' exact>
									Estado
								</NavLink>
							</li>

							<li className="nav-item">
								<NavLink className="nav-link" to="/tipos" activeClassName='active' exact>
									Tipos
								</NavLink>
							</li>

						</ul>
						<form className="d-flex" role="search">
							<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
							<button className="btn btn-outline-success" type="submit">Search</button>
						</form>
					</div>
				</div>
			</nav>
	</>
}
