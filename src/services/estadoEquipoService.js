import { axiosInstance } from '../helpers/axios-config'

const getEstadoEquipo = () => {
    const resp = axiosInstance.get('estado-equipo', {
        headers:{
            'Content-type': 'application/json'
        }
    });

    return resp;
}

const createEstadoEquipo = (data) => {
    const resp = axiosInstance.post('estado-equipo', data, {
        headers:{
            'Content-type': 'application/json'
        }
    })

    return resp;
}

const updateEstadoEquipo = (estadoEquipoId, data) => {
    const resp = axiosInstance.put(`estado-equipo/${estadoEquipoId}`,data, {
        headers:{
            'Content-type': 'application/json'
        }
    })

    return resp;
}

export{
   getEstadoEquipo,
   createEstadoEquipo,
   updateEstadoEquipo
}