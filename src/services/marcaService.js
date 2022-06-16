import { axiosInstance } from '../helpers/axios-config'

const getMarca = () => {
    const resp = axiosInstance.get('marca', {
        headers:{
            'Content-type': 'application/json'
        }
    });

    return resp;
}

const createMarca = (data) => {
    const resp = axiosInstance.post('marca', data, {
        headers:{
            'Content-type': 'application/json'
        }
    })

    return resp;
}

const updateMarca = (marcaId, data) => {
    const resp = axiosInstance.put(`marca/${marcaId}`,data, {
        headers:{
            'Content-type': 'application/json'
        }
    })

    return resp;
}

export{
    getMarca,
    createMarca,
    updateMarca
}