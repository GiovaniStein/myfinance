import axios from 'axios';
import Alert from '../components/alert/Alert'

const api = axios.create({
    baseURL: 'http://localhost:3333'
})


class UserApi {
    static verifyLogin = async (email, password) => {

        try {
            const response = await api.post('/users/login', { email, password });
            if (!!response.data && response.status === 200) {
                return response.data[0];
            } else {
                return {};
            }
        } catch (e) {
            console.error(e);
        }
    }
}

class CrudApi {
  
    static save = async (endpoint, object) => {
        try {
            const response = await api.post('/'+endpoint, object);
            if (!!response.data && response.status === 200) {
                Alert.ToastMessage({ title: 'Sucesso', type: 'sucess', description: 'Operação de cadastro finalizado com sucesso!' });
                return response.data[0];
            } else {
                Alert.ToastMessage({ title: 'Erro', type: 'error', description: 'Ocorreu um erro ao finalizar o cadastro!' });
                return {};
            }
        } catch (e) {
            console.error(e);
        }
    }

    static update = async (endpoint, id, object) => {
        try {
            const response = await api.put('/'+endpoint+'/'+id, object);
            if (!!response.data && response.status === 200) {
                return response.data[0];
            } else {
                return {};
            }
        } catch (e) {
            console.error(e);
        }
    }

    static delete = async (endpoint, id) => {

        try {
            const response = await api.delete('/'+endpoint+'/'+id);
            if (!!response.data && response.status === 200) {
                return response.data[0];
            } else {
                return {};
            }
        } catch (e) {
            console.error(e);
        }
    }
}

class Api {
    static CrudApi = CrudApi;
    static UserApi = UserApi;
}

export default Api;
