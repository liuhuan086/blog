import React from 'react'
import '../static/style/components/header.css'
// import Icon from "@ant-design/icons/es/components/AntdIcon";
// import Icon from "@ant-design/icons";
import Icon from "antd/lib/icon";
import {Row, Col, Menu} from "antd";


const Header = () => (
    <div className="header">
        <Row type="flex" justify="center">
            <Col xs={24} sm={24} md={10} lg={10} xl={10}>
                <span className="header-logo">好好学习</span>
                <span className="header-txt">当上CTO，迎娶小宝贝儿，走向人生巅峰</span>
            </Col>

            <Col xs={0} sm={0} md={14} lg={8} xl={6}>

                <Menu mode="horizontal">
                    <Menu.Item key="home">
                        <Icon type="home"/>
                        首页
                    </Menu.Item>

                    <Menu.Item key="video">
                        <Icon type="youtube"/>
                        视频
                    </Menu.Item>

                    <Menu.Item key="life">
                        <Icon type="smile"/>
                        生活
                    </Menu.Item>
                </Menu>
            </Col>
        </Row>
    </div>
)

export default Header