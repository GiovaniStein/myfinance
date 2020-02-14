import React, {useState, useEffect} from "react";
import { Link, withRouter, Route, Switch } from "react-router-dom";
import ListCategory from '../category/ListCategory';
import CreateCategory from '../category/CreateCategory';
import CreateOperation from '../payment/CreateOperation';
import ListOperation from '../payment/ListOperation';
import { Layout, Menu, Icon } from 'antd';
import './Home.css';

const { Header, Sider, Content } = Layout;

const { SubMenu } = Menu;

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
                        {/* <SubMenu
                            key="sub1"
                            title={
                                <span>
                                    <Icon type="tags" />
                                    <span>Categoria</span>
                                </span>
                            }
                        >
                            <Menu.ItemGroup key="g1" title="Item 1">
                                <Menu.Item onClick={renderContent} key="2">
                                    <Icon type="video-camera" />
                                    <span>nav 2</span>
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <Icon type="upload" />
                                    <span>nav 3</span>
                                </Menu.Item>
                            </Menu.ItemGroup>
                            <Menu.ItemGroup key="g2" title="Item 2">
                                <Menu.Item key="4">Option 3</Menu.Item>
                                <Menu.Item key="5">Option 4</Menu.Item>
                            </Menu.ItemGroup>
                        </SubMenu> */}
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
                                <Route path="/home/dashboard" component={() => <h1>Dashboard</h1>} />
                                <Route path="/home/category/list" component={ListCategory} />
                                <Route path="/home/category/create" component={CreateCategory} />
                                <Route path="/home/operation/create" component={CreateOperation} />
                                <Route path="/home/operation/list" component={ListOperation} />
                                {/* <PrivateRoute path="/app" component={() => <h1>App</h1>} /> */}
                            </Switch>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </div>

    );
}


export default withRouter(Home);