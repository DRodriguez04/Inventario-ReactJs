import React, { useState, useEffect } from 'react'
import { getTipoEquipo, createTipoEquipo } from '../../services/tipoEquipoService'
import moment from 'moment';

export const ViewTipo = () => {

   // variables de estado
   const [ tipoEquipos, setTiposEquipos ] = useState([]);
   const [ valoresForm, setValoresForm ] = useState([]);
   const { nombre='', estado='' } = valoresForm;
 
   const listarTipoEquipo = async () => {
     try {
       const resp = await getTipoEquipo();
       console.log(resp.data);
       setTiposEquipos(resp.data);
     } catch (error) {
       console.log(error);
     }
   }
 
   const handleOnChange = (e) => {
     setValoresForm({ ...valoresForm, [ e.target.name ]: e.target.value });
   }
 
   const crearTipoEquipo = async (tipoEquipo) => {
     try {
       const resp = await createTipoEquipo(tipoEquipo);
       console.log(resp.data);
       listarTipoEquipo();
       setValoresForm({ nombre:'', estado:'' })
     } catch (error) {
       console.log(error);
     }
   }
 
   const handleCrearTipoEquipo = (e) => {
     e.preventDefault();
     crearTipoEquipo(valoresForm);
     setTiposEquipos([ ...tipoEquipos, valoresForm ])

   }
 
   useEffect(() => { listarTipoEquipo(); }, [])

  return(
    <div className='container-fluid'>
        <form onSubmit={(e) => handleCrearTipoEquipo(e) }>
          <legend>Crear / Actualizar Tipo de Equipo</legend>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input required name='nombre' value={nombre} type="text" className="form-control"
            onChange={(e) => handleOnChange(e) }/>
          </div>
          <div className="mb-3">
            <label className="form-label">Estado</label>
            <select required name='estado'  value={estado} class="form-select" aria-label="Default select example" placeholder='Digite tipo de equipo'
            onChange={(e) => handleOnChange(e) }>
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
                tipoEquipos.map(tipoEquipo => {
                  return <tr>
                  <td>{tipoEquipo.nombre}</td>
                  <td>{tipoEquipo.estado}</td>
                  <td>{moment (tipoEquipo.fechaCreacion).format('MMM-DD-YYYY HH:mm') }</td>
                </tr>
                })
              }
            </tbody>
      </table>
      </form>
    </div>
  )
}
