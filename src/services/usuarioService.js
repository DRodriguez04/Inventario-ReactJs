import { axiosInstance } from '../helpers/axios-config'

const getUsuario = () => {
    const resp = axiosInstance.get('usuario', {
        headers:{
            'Content-type': 'application/json'
        }
    });

    return resp;
}

const createUsuario = (data) => {
    const resp = axiosInstance.post('usuario', data, {
        headers:{
            'Content-type': 'application/json'
        }
    })

    return resp;
}

const updateUsuario = (usuarioId, data) => {
    const resp = axiosInstance.put(`usuario/${usuarioId}`,data, {
        headers:{
            'Content-type': 'application/json'
        }
    })

    return resp;
}

export{
    getUsuario,
    createUsuario,
    updateUsuario
}
