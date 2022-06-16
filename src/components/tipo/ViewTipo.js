import React, { useState, useEffect } from 'react'
import { getTipoEquipo, createTipoEquipo, updateTipoEquipo } from '../../services/tipoEquipoService'

export const ViewTipo = () => {

  const [tiposEquipos, setTiposEquipos] = useState([]);
  const[valoresForm, setValoresForm] = useState([]);
  const[nombre = '', estado = ''] = valoresForm;

  const listarTipoEquipos = async() => {

    try{
      const resp = await getTipoEquipo();
      setTiposEquipos(resp.data)
    }catch(error){
      console.log(error);
    }

    const handleOnChange = (e) => {
      setValoresForm({ ...valoresForm, [e.target.name]: e.target.value })
    }
  
    const nuevoTipoEquipo = async(tipoEquipo) => {
      try {
        const resp = await createTipoEquipo(tipoEquipo);
        console.log(resp.data);
        listarTipoEquipos();
        setValoresForm({ nombre:'', estado: '' })
      } catch (error) {
        console.log(error);
      }
    }
  
    const handleCrearTiposEquipos = (e) =>{
      e.preventDefault();
      nuevoTipoEquipo(valoresForm);
    }
  
    useEffect(() => {
      listarTipoEquipos();
    }, [])


  return (
    <div className='container-fluid'>
      <form onSubmit={(e) => handleCrearTiposEquipos (e)}>
        <legend>Crear / Actualizar Tipo del equipo</legend>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input required name='nombre' value={nombre} type="text" className="form-control" placeholder="Nombre del tipo de equipo"
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
          tiposEquipos.map(tipoEquipo => {
            return <tr key={tipoEquipo._id}>
            <td>{ tipoEquipo.nombre }</td>
            <td>{tipoEquipo.estado}</td>
          </tr>
          })
        }
      </tbody>
    </table>
</div>
  )
}
}
