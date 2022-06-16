import { axiosInstance } from '../helpers/axios-config'

const getInventarios = () => {
    const resp = axiosInstance.get('inventario', {
        headers:{
            'Content-type': 'application/json'
        }
    });

    return resp;
}

const createInventarios = (data) => {
    const resp = axiosInstance.post('inventario', data, {
        headers:{
            'Content-type': 'application/json'
        }
    })

    return resp;
}

const updateInventarios = (inventarioId, data) => {
    const resp = axiosInstance.put(`inventario/${inventarioId}`,data, {
        headers:{
            'Content-type': 'application/json'
        }
    })

    return resp;
}

export{
    getInventarios,
    createInventarios,
    updateInventarios
}