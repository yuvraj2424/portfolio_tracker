import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';

const root = ReactDOM.createRoot(document.getElementById('root'));

const APP_THEME = {
    colorPrimary:"#001529", //'#08c475', //'#00b96b',    background-color: #rgb(63, 63, 63);
    
    borderRadius: 10,
    colorBgContainer:'#001529',//--color-primary-200: #5e43f3;--color-surface-100: #121212;

}

root.render(
    <BrowserRouter>
        <ConfigProvider
            theme={{
                token: APP_THEME
            }}
        >
            <App />
        </ConfigProvider>
    </BrowserRouter>
);
