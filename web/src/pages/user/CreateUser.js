import React, { Component, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import '../login/Login.css';
import Api from '../../service/Api';
import Alert from '../../components/alert/Alert'
import { Input, Icon } from 'antd';
import Utils from '../../utils/Utils';

const CreateUser = (props) => {

    const [user_email, setUserEmail] = useState('');
    const [user_password, setUserPassword] = useState('');
    const [user_name, setUserName] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        let password = await Utils.encodeSha256(user_password);
        const response = await Api.crudApi.save('users', { user_name, user_email, password });
        if (!!response) {
            props.history.push("/");
        } else {
            Alert.ToastMessage({title: 'Erro', type:'error', description:'Erro ao cadastrar usuário!'});
        }
    }

    return (
        <div className="mainDiv">
            <div id="app">
                <div className="loginFormContainer">
                    <div className="titleForm">
                        <Icon type="user" />
                        <strong>Cadastrar Usuário</strong>
                    </div>

                    <form onSubmit={handleSubmit}>

                        <div className="input-container">
                            <label htmlFor="user_name">Nome</label>

                            <Input type="text"
                                placeholder="Nome"
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                name="user_name" id="user_name"
                                required
                                onChange={e => { setUserName(e.target.value) }}
                            />
                        </div>

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
                            <Input type="password"
                                placeholder="Senha"
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                name="user_password"
                                id="user_password"
                                required
                                onChange={e => { setUserPassword(e.target.value) }}
                            />
                        </div>

                        <div className="input-container">
                            <button type="submit">Salvar</button>
                        </div>

                        <Link to="/">
                            <button className="button-danger">
                                Voltar
                            </button>
                        </Link>

                    </form>
                </div>
            </div>
        </div>
    );
}


export default withRouter(CreateUser);