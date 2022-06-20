import React, { useState, useEffect } from 'react';
import { getInventarios, createInventarios } from '../../services/inventarioService'

export const ViewInventario = () => {

    const [ inventarios, setInventarios ] = useState([]);

    const listarInventarios = async () => {
        try {
          const resp = await getInventarios();
          console.log(resp.data);
          setInventarios(resp.data);
        } catch (error) {
          console.log(error);
        }
      }
      
    useEffect(() => { listarInventarios(); }, [])


  return(
    <div className='container-fluid'>
        <div className="card border-secondary mb-3">
          <div className="row row-cols-1 row-cols-md-2 g-4">
        
            {
                inventarios.map(inventario => {
                    return <div className="col" key={inventario._id}>
                    <div className="card">
                      <img src="..." className="card-img-top" alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title">Serial: {inventario.serial}</h5>
                        <p className="card-text">{inventario.descripcion}</p>
                      </div>
                    </div>
                  </div>
                })
            }
            </div>
        
      </div>
  </div>
  )
}
