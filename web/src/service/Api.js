import axios from 'axios';

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
