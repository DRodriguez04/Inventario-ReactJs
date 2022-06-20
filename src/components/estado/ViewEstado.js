import React, { useState, useEffect } from 'react'
import { getEstadoEquipo, createEstadoEquipo } from '../../services/estadoEquipoService'
import moment from 'moment';

export const ViewEstado = () => {

  // variables de estado
  const [ estadosEquipos, setEstadosEquipos ] = useState([]);
  const [ valoresForm, setValoresForm ] = useState([]);
  const { nombre='', estado='' } = valoresForm;

  const listarEstadoEquipo = async () => {
    try {
      const resp = await getEstadoEquipo();
      console.log(resp.data);
      setEstadosEquipos(resp.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleOnChange = (e) => {
    setValoresForm({ ...valoresForm, [ e.target.name ]: e.target.value });
  }

  const crearEstadoEquipo = async (estadoEquipo) => {
    try {
      const resp = await createEstadoEquipo(estadoEquipo);
      console.log(resp.data);
      listarEstadoEquipo();
      setValoresForm({ nombre:'', estado:'' })
    } catch (error) {
      console.log(error);
    }
  }

  const handleCrearEstadoEquipo = (e) => {
    e.preventDefault();
    crearEstadoEquipo(valoresForm);
    setEstadosEquipos([ ...estadosEquipos, valoresForm ])
  }

  useEffect(() => { listarEstadoEquipo(); }, [])

  return(
    <div className='container-fluid'>
        <form onSubmit={(e) => handleCrearEstadoEquipo(e) }>
          <legend>Crear / Actualizar Estado del Equipo</legend>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input required name='nombre' value={nombre} type="text" className="form-control" onChange={(e) => handleOnChange(e) }/>
          </div>
          <div className="mb-3">
            <label className="form-label">Estado</label>
            <select required name='estado' value={estado} class="form-select" aria-label="Default select example" onChange={(e) => handleOnChange(e) }>
              <option defaultValue value="">--SELECCIONE--</option>
              <option value="Activo">Activo</option>
              <option value="Inactivo">Inactivo</option>
            </select>
          </div>
          <button className="btn btn-primary">Guardar</button>
          <hr/>

          <table className="table table-success table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Estado</th>
            <th>Fecha de Creación</th>
          </tr>
        </thead>
        <tbody>
          {
            estadosEquipos.map(estadoEquipo => {
              return <tr key={estadoEquipo._id}>
              <td>{estadoEquipo.nombre}</td>
              <td>{estadoEquipo.estado}</td>
              <td>{moment (estadoEquipo.fechaCreacion).format('MMM-DD-YYYY HH:mm') }</td>
            </tr>
            })
          }
        </tbody>
      </table>
      </form>
      
     
    </div>
  )
 
}

