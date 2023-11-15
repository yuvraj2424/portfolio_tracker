import { useEffect } from "react";
import React from "react";
import {
    Row,
    Col, Input,
    Layout,
    Button,
    theme,
    Flex
} from "antd";

import {
    MenuFoldOutlined,
    MenuUnfoldOutlined, SearchOutlined
} from '@ant-design/icons';
import { isMobile } from "react-device-detect";




const profile = [
    <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="#fff"
        xmlns="http://www.w3.org/2000/svg"
        key={0}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM12 7C12 8.10457 11.1046 9 10 9C8.89543 9 8 8.10457 8 7C8 5.89543 8.89543 5 10 5C11.1046 5 12 5.89543 12 7ZM9.99993 11C7.98239 11 6.24394 12.195 5.45374 13.9157C6.55403 15.192 8.18265 16 9.99998 16C11.8173 16 13.4459 15.1921 14.5462 13.9158C13.756 12.195 12.0175 11 9.99993 11Z"
            fill="#fff"
        ></path>
    </svg>,
];
const { Header: AntHeader, Content, Sider } = Layout;

function Header({
    collapsed,
    onPress,
    onDrawer,
    visible
}) {
    const name = "ABCS";
    useEffect(() => window.scrollTo(0, 0));
    const {
        token: { colorBgContainer, colorPrimary },
    } = theme.useToken();

    return (

        <AntHeader className="header-container">
            <Row >
                <Col xs={16} sm={12} md={12} lg={14} xl={14} >
                    <Flex>
                        <Button
                            type="text"
                            className="visisble-desktop"
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={onPress}
                            style={{
                                fontSize: '16px',
                                width: 64,
                                height: 64,
                            }}
                        />
                        <Button
                            type="text"
                            className="visisble-mobile"
                            icon={visible ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={onDrawer}
                            style={{
                                fontSize: '16px',
                                width: 64,
                                height: 64,
                            }}
                        />
                        <h2>{"Portfolio Tracker"}</h2>
                    </Flex>
                </Col>
                <Col xs={8} sm={12} md={12} lg={10} xl={10} className="header-control">
                    <Row justify={isMobile ? "center" : "end"}>
                        {/* <Col xl={18}>
                            <Input
                                placeholder="Type here..."
                                className="search-input"
                                prefix={<SearchOutlined />}
                            />
                        </Col> */}
                        <Col className="mr-16">
                            <a className="display-flex-align-center">
                                {profile}
                                &nbsp;
                                <span >Sign In</span>
                            </a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </AntHeader>
    );
}

export default React.memo(Header);
