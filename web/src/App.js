import React from 'react';
import './global.css';
import Routes from "./routes";
import 'antd/dist/antd.css';
import {Provider} from 'react-redux'
import store from './store/index';


const App = () => {
    return(
        <Provider store={store}>
            <Routes />;
        </Provider>
    )
}




export default App;

