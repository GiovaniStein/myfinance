import React, { useState, useEffect } from "react";
import { Link, withRouter, Route, Switch } from "react-router-dom";
import ListCategory from '../category/ListCategory';
import ListLocation from '../location/ListLocation';
import CreateCategory from '../category/CreateCategory';
import CreateOperation from '../payment/CreateOperation';
import CreateLocation from '../location/CreateLocation';
import ListOperation from '../payment/ListOperation';
import Dashboard from '../dashboard/Dashboard';
import { Layout, Menu, Icon } from 'antd';
import './Home.css';

const { Header, Sider, Content } = Layout;

const Home = (props) => {

    useEffect(() => {
        props.history.push("/home/dashboard");
    }, []);

    const [collapsed, setCollapsed] = useState(true);

    return (
        <div className="homeContainer">
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Icon type="dashboard" />
                            <span>Dashboard</span>
                            <Link to="/home/dashboard" />
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="tags" />
                            <span>Categoria</span>
                            <Link to="/home/category/list" />
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="dollar" />
                            <span>Operação</span>
                            <Link to="/home/operation/list" />
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Icon type="shop" />
                            <span>Locais</span>
                            <Link to="/home/location/list" />
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger"
                            type={collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={e => { setCollapsed(!collapsed) }}
                        />
                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            background: '#fff',
                            minHeight: 280,
                        }}
                    >
                        <div>
                            <Switch>
                                <Route path="/home/dashboard" component={Dashboard} />
                                <Route path="/home/category/list" component={ListCategory} />
                                <Route path="/home/category/create" component={CreateCategory} />
                                <Route path="/home/operation/create" component={CreateOperation} />
                                <Route path="/home/operation/list" component={ListOperation} />
                                <Route path="/home/location/list" component={ListLocation} />
                                <Route path="/home/location/create" component={CreateLocation} />
                            </Switch>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </div>

    );
}


export default withRouter(Home);