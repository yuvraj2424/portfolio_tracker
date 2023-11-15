import React from 'react';
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Layout, theme, Drawer } from 'antd';
import Footer from "./Footer";
import Header from './Header';
import Sidenav from './Sidenav';

const { Header: AntHeader, Content, Sider } = Layout;

export default function Main({ children }) {
    const [visible, setVisible] = useState(false);

    const { pathname } = useLocation();
    const page = pathname.replace("/", "");

    const openDrawer = () => setVisible(!visible);
    const [collapsed, setCollapsed] = useState(true);
    const {
        token: { colorBgContainer, colorPrimary },
    } = theme.useToken();

    return (
        <Layout className='layout-dashboard'>
            <Drawer
                title={false}
                placement={"left"}
                className='drawer'
                closable={false}
                width={225}
                onClose={() => setVisible(false)}
                visible={visible}
                key={'left'}
            >
                <Layout className='mobile-layout'>
                    <Sider
                        width={223}
                        trigger={null}
                        className='slider-container sider-primary ant-layout-sider-primary'
                    >
                        <Sidenav color={colorPrimary} />
                    </Sider>
                </Layout>
            </Drawer>
            <Sider
                trigger={null}
                collapsible
                breakpoint="lg"
                //  collapsedWidth="0"
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}

                className='slider-container slider-desktop sider-primary ant-layout-sider-primary'
                collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <Sidenav color={colorPrimary} />
            </Sider>
            <Layout className={collapsed ?'layout-dashboard-container2':'layout-dashboard-container'}>
                <Header onDrawer={openDrawer} visible={visible} onPress={() => setCollapsed((prev) => !prev)} collapsed />
                <Content
                    style={{
                        margin: '10px',
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    {children}
                </Content>
                <Footer />
            </Layout>
        </Layout>
    )
}
