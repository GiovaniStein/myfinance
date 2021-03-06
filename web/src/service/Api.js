import axios from 'axios';
import Alert from '../components/alert/Alert'


const api = axios.create({
    baseURL: 'http://localhost:3333',
    withCredentials: true,
})

class ListApi {
    static listValuesWithPagination = async (endpoint, offset, limit, search) => {
        try {
            const response = await api.get(`/${endpoint}`, {
                params:
                {
                    offset: offset,
                    limit: limit,
                    search: search,
                }
            });
            if (!!response.data && response.status === 200) {
                return response.data;
            }
        } catch (e) {
            console.error(e);
            return {data: [], count:0};
        }
    }

    static listAll = async (endpoint) => {
        try {
            const response = await api.get(`/${endpoint}/list`);
            if (!!response.data && response.status === 200) {
                return response.data;
            }
        } catch (e) {
            console.error(e);
            return [];
        }

    }
}


class UserApi {
    static verifyLogin = async (email, password) => {
        try {
            const response = await api.post('/users/login', {email, password});
            if (!!response.data && response.status === 200) {
                return response.data;
            }
        } catch (e) {
            console.error(e);
            return false;
        }
    }

    static verifyAuth = async () => {
        try {
            const response = await api.get('/auth');
            return response.data;
        } catch (e) {
            return false;
        }
    }
}

class CrudApi {

    static save = async (endpoint, object) => {
        try {
            const response = await api.post(`/${endpoint}`, object);
            if (response.status === 201) {
                Alert.ToastMessage({ title: 'Sucesso', type: 'success', description: 'Operação de cadastro finalizado com sucesso!' });
            } else {
                Alert.ToastMessage({ title: 'Erro', type: 'error', description: 'Ocorreu um erro ao finalizar o cadastro!' });
            }
            return response.data;
        } catch (e) {
            console.error(e);
            return false;
        }
    }

    static update = async (endpoint, id, object) => {
        try {
            const response = await api.put(`/${endpoint}/${id}`, object);
            if (response.status === 200) {
                Alert.ToastMessage({ title: 'Sucesso', type: 'success', description: 'Atualização de registro finalizado com sucesso!' });
            } else {
                Alert.ToastMessage({ title: 'Erro', type: 'error', description: 'Ocorreu um erro ao tentar atualizar o registro!' });
            }
            return response.data;
        } catch (e) {
            console.error(e);
            return false;
        }
    }

    static delete = async (endpoint, id) => {
        try {
            const response = await api.delete(`/${endpoint}/${id}`);
            if (response.status === 200) {
                Alert.ToastMessage({ title: 'Sucesso', type: 'success', description: 'O Registro foi excluido com sucesso!' });
            } else {
                Alert.ToastMessage({ title: 'Erro', type: 'error', description: 'Ocorreu um erro ao tentar excluir o registro!' });
            }
        } catch (e) {
            console.error(e);
        }
    }
}

class Api {
    static CrudApi = CrudApi;
    static UserApi = UserApi;
    static ListApi = ListApi;
}

export default Api;
