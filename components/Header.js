import React from 'react'
import '../static/style/components/header.css'
import {HomeOutlined, SmileOutlined, YoutubeOutlined} from "@ant-design/icons";
import {Row, Col, Menu} from "antd";


const Header = () => (
    <div className="header">
        <Row type="flex" justify="center">
            <Col xs={24} sm={24} md={10} lg={15} xl={12}>
                <span className="header-logo">好好学习</span>
                <span className="header-txt">当上CTO，迎娶小宝贝儿，走向人生巅峰</span>
            </Col>

            <Col xs={0} sm={0} md={14} lg={8} xl={6}>

                <Menu mode="horizontal">
                    <Menu.Item key="home">
                        <HomeOutlined/>
                        首页
                    </Menu.Item>

                    <Menu.Item key="video">
                        <YoutubeOutlined/>
                        视频
                    </Menu.Item>

                    <Menu.Item key="life">
                        <SmileOutlined/>
                        生活
                    </Menu.Item>
                </Menu>
            </Col>
        </Row>
    </div>
)

export default Header