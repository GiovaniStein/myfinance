import React from 'react';
import './global.css';
import Routes from "./routes";
import 'antd/dist/antd.css';
import {AppProvider} from './context/AppContext';



const App = () => {
    return (
        <AppProvider >
            <Routes />
        </AppProvider>
    )
}




export default App;

