
import React from "react";
import { Layout, Row, Col, theme } from "antd";
import { HeartFilled } from "@ant-design/icons";

function Footer() {
    const { Footer: AntFooter } = Layout;
    const {
        token: { colorBgContainer, colorPrimary },
    } = theme.useToken();
    return (
        <AntFooter style={{ background:colorBgContainer }}>
            <Row>
                <Col xs={24} md={12} lg={12}>
                    {/* <div className="copyright">
                        © 2023,
                        {<HeartFilled />} by
                        <a href="#pablo" target="_blank">
                            XYZ
                        </a>
                    </div> */}
                </Col>
                <Col xs={24} md={12} lg={12}>
                    <div className="footer-menu">
                        <ul>
                            <li className="nav-item">
                                <a
                                    href="#"
                                    className="nav-link text-muted"
                                    target="_blank"
                                >
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="#"
                                    className="nav-link text-muted"
                                    target="_blank"
                                >
                                    About Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </AntFooter>
    );
}

export default React.memo(Footer);
