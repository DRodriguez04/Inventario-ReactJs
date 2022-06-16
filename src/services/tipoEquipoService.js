import { axiosInstance } from '../helpers/axios-config'

const getTipoEquipo = () => {
    const resp = axiosInstance.get('tipo-equipo', {
        headers:{
            'Content-type': 'application/json'
        }
    });

    return resp;
}

const createTipoEquipo = (data) => {
    const resp = axiosInstance.post('tipo-equipo', data, {
        headers:{
            'Content-type': 'application/json'
        }
    })

    return resp;
}

const updateTipoEquipo = (tipoEquipoId, data) => {
    const resp = axiosInstance.put(`tipo-equipo/${tipoEquipoId}`,data, {
        headers:{
            'Content-type': 'application/json'
        }
    })

    return resp;
}

export{
    getTipoEquipo,
    createTipoEquipo,
    updateTipoEquipo
}