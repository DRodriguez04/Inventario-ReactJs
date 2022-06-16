import React, { useState, useEffect } from 'react'
import { getEstadoEquipo, createEstadoEquipo, updateEstadoEquipo } from '../../services/estadoEquipoService'

export const ViewEstado = () => {

  const [estados, setEstados] = useState([]);
  const[valoresForm, setValoresForm] = useState([]);
  const[nombre = '', estado = ''] = valoresForm;

  const listarEstados = async() => {

    try{
      const resp = await getEstadoEquipo();
      setEstados(resp.data)
    }catch(error){
      console.log(error);
    }

    const handleOnChange = (e) => {
      setValoresForm({ ...valoresForm, [e.target.name]: e.target.value })
    }
  
    const nuevoEstadoEquipo = async(estado) => {
      try {
        const resp = await createEstadoEquipo(estado);
        console.log(resp.data);
        listarEstados();
        setValoresForm({ nombre:'', estado: '' })
      } catch (error) {
        console.log(error);
      }
    }
  
    const handleCrearEstadoEquipo = (e) =>{
      e.preventDefault();
      nuevoEstadoEquipo(valoresForm);
    }
  
    useEffect(() => {
      listarEstados();
    }, [])
  }
  return (
    <div className='container-fluid'>
      <form onSubmit={(e) => handleCrearEstadoEquipo (e)}>
        <legend>Crear / Actualizar Estado del equipo</legend>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input required name='nombre' value={nombre} type="text" className="form-control"
          onChange={(e) => handleOnChange (e)}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Estado</label>
          <select required name='estado' value={estado} className="form-select" onChange={(e) => handleOnChange (e)}>
            <option defaultValue="">--Seleccione--</option>
            <option value="Activo">Activo</option>
            <option value="Inactivo">Inactivo</option>
          </select>
        </div>
        <button className="btn btn-primary">Guardar</button>
    </form>
    <hr/>
    <table className="table table-success table-striped">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        {
          estados.map(estado => {
            return <tr key={estado._id}>
            <td>{ estado.nombre }</td>
            <td>{estado.estado}</td>
          </tr>
          })
        }
      </tbody>
    </table>
</div>
  )
}

