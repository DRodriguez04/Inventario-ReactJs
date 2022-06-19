import React, { useState, useEffect } from 'react';
import { getInventarios, createInventarios, updateInventarios } from '../../services/inventarioService'

export const ViewInventario = () => {

  const [inventarios, setInventarios] = useState([]);

  const listarInventarios = async () => {

    try{
      const resp = await getInventarios();
      setInventarios(resp.data)
    }catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    listarInventarios();
  }, [])

  const handleOnChange = (e) => {
    setValoresForm({ ...valoresForm, [e.target.name]: e.target.value })
  }

  const nuevoInventario = async(inventario) => {
    try {
      const resp = await createInventarios(inventario);
      console.log(resp.data);
      listarInventarios();
      setValoresForm({ nombre:'', estado: '' })
    } catch (error) {
      console.log(error);
    }
  }

  const handleCrearInventario = (e) =>{
    e.preventDefault();
    nuevoInventario(valoresForm);
  }

  /*return (
    <div className='container-fluid'>
    <form onSubmit={(e) => handleCrearInventario (e)}>
      <legend>Crear / Actualizar el inventario</legend>
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
        inventarios.map(inventario => {
          return <tr key={inventario._id}>
          <td>{ inventario.nombre }</td>
          <td>{inventario.estado}</td>
        </tr>
        })
      }
    </tbody>
  </table>
</div>
  )*/
}
