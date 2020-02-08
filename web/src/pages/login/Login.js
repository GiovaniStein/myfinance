import React, { Component, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import './Login.css';
import Api from '../../service/Api';
import Alert from '../../components/alert/Alert'
import { Spin, Input, Icon} from 'antd';
import Utils from '../../utils/Utils';

const Login = (props) => {

    const [user_email, setUserEmail] = useState('');
    const [user_password, setUserPassword] = useState('');
    const [loading, setLoading] = useState(false);


    async function handleSubmit(e) {
        setLoading(true);
        e.preventDefault();
        let password = await Utils.encodeSha256(user_password);
        const response = await Api.UserApi.verifyLogin(user_email, password);
        if (!!response) {
            props.history.push("/home");
        } else {
            Alert.ToastMessage({ title: 'Erro', type: 'error', description: 'Usuário não encontrado!' });
        }
        setLoading(false)

    }

    return (
        <div className="mainDiv">
            <div id="app">
                <div className="loginFormContainer">

                    <div className="titleForm">
                        <Icon type="login" />
                        <strong>Login</strong>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="input-container">
                            <label htmlFor="user_email">Email</label>
                            <Input type="email"
                                placeholder="example@example.com"
                                prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                name="user_email" id="user_email"
                                required
                                onChange={e => { setUserEmail(e.target.value) }}
                            />

                        </div>

                        <div className="input-container">
                            <label htmlFor="user_password">Senha</label>
                            <Input.Password
                                placeholder="Senha"
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                name="user_password"
                                id="user_password"
                                required
                                onChange={e => { setUserPassword(e.target.value) }}
                            />
                        </div>

                        <div className="input-container">
                            <button type="submit">Login</button>
                        </div>

                        <div className="input-container">
                            <Link to="/user">Criar conta</Link>
                        </div>

                    </form>
                </div>
            </div>
            {loading &&
                <Spin className="loadIcon" size="large" />
            }
        </div>
    );
}


export default withRouter(Login);