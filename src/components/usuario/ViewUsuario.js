import React, { useState, useEffect } from 'react'
import { getUsuario, createUsuario } from '../../services/usuarioService'
import moment from 'moment';

export const ViewUsuario = () => {

  // variables de estado
  const [ usuarios, setUsuarios ] = useState([]);
  const [ valoresForm, setValoresForm ] = useState([]);
  const { nombre='', estado='', email='' } = valoresForm;

  const listarUsuarios = async () => {
    try {
      const resp = await getUsuario();
      console.log(resp.data);
      setUsuarios(resp.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleOnChange = (e) => {
    setValoresForm({ ...valoresForm, [e.target.name]: e.target.value });
  }

  const crearUsuario = async (usuario) => {
    try {
      const resp = await createUsuario(usuario);
      console.log(resp.data);
      listarUsuarios();
      setValoresForm({ nombre:'', estado:'', email:'' });
    } catch (error) {
      console.log(error);
    }
  }

  const handleCrearUsuario = (e) => {
    e.preventDefault();
    crearUsuario(valoresForm);
    setUsuarios([ ...usuarios, valoresForm ])
  }

  useEffect(() => { listarUsuarios(); }, [])

  return (
    <div className='container-fluid'>
        <form onSubmit={(e) => handleCrearUsuario(e) }>
          <legend>Crear / Actualizar Usuario</legend>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input required name='nombre' value={nombre} type="text" className="form-control" placeholder="Nombre del usuario"
            onChange={(e) => handleOnChange(e) }/>
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input required name='email' value={email} type="text" className="form-control" placeholder="Digite el email"
            onChange={(e) => handleOnChange(e) }/>
          </div>
          <div className="mb-3">
            <label className="form-label">Estado</label>
            <select required name='estado' value={estado} className="form-select" onChange={(e) => handleOnChange(e) }>
              <option defaultValue value="">--SELECCIONE--</option>
              <option value="Activo">Activo</option>
              <option value="Inactivo">Inactivo</option>
            </select>
          </div>
          <hr/>
          <button className="btn btn-primary">Guardar</button>
          <hr/>
          <table className="table table-success table-striped">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Estado</th>
                <th>Email</th>
                <th>Fecha de Creación</th>
              </tr>
            </thead>
            <tbody>
              {
                usuarios.map(usuario => {
                  return <tr key={ usuario._id }>
                  <td>{ usuario.nombre }</td>
                  <td>{ usuario.estado }</td>
                  <td>{ usuario.email }</td>
                  <td>{moment (usuario.fechaCreacion).format('MMM-DD-YYYY HH:mm') }</td>
                </tr>
                })
              }
            </tbody>
        </table>
      </form>
  </div>
  )
}
