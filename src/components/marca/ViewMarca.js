import React, { useState, useEffect } from 'react'
import { getMarca, createMarca, updateMarca } from '../../services/marcaService'

export const ViewMarca = () => {

  const [marcas, setMarcas] = useState([]);
  const[valoresForm, setValoresForm] = useState([]);
  const[nombre = '', estado = ''] = valoresForm;

  const listarMarcas = async() => {

    try{
      const resp = await getMarca();
      setMarcas(resp.data)
    }catch(error){
      console.log(error);
    }
  }

  const handleOnChange = (e) => {
    setValoresForm({ ...valoresForm, [e.target.name]: e.target.value })
  }

  const nuevaMarca = async(marca) => {
    try {
      const resp = await createMarca(marca);
      console.log(resp.data);
      listarMarcas();
      setValoresForm({ nombre:'', estado: '' })
    } catch (error) {
      console.log(error);
    }
  }

  const handleCrearMarca = (e) =>{
    e.preventDefault();
    nuevaMarca(valoresForm);
  }

  useEffect(() => {
    listarMarcas();
  }, [])

  return (
    <div className='container-fluid'>
      <form onSubmit={(e) => handleCrearMarca (e)}>
        <legend>Crear / Actualizar Marcas</legend>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input required name='nombre' value={nombre} type="text" className="form-control" placeholder="Nombre de la marca"
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
          marcas.map(marca => {
            return <tr key={marca._id}>
            <td>{ marca.nombre }</td>
            <td>{marca.estado}</td>
          </tr>
          })
        }
      </tbody>
    </table>
</div>
)
}
