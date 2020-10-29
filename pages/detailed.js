import Head from 'next/head'
import React from 'react'
import {Row, Col, Breadcrumb} from "antd";
import {FieldTimeOutlined, FolderOpenOutlined, ReadOutlined} from "@ant-design/icons";
import Header from "../components/Header";
import Author from "../components/Author";
import Advert from "../components/Ad";
import Footer from "../components/Footer";

import '../static/style/pages/detailed.css'

const Detailed = () => (
    <div>
        <Head>
            <title>Detailed</title>
        </Head>
        <Header/>
        <Row className='comm-main' type='flex' justify='center'>
            <Col className='comm-left' xs={24} sm={24} md={16} lg={18} xl={14}>
                <div>
                    <div className='bread-div'>
                        <Breadcrumb>
                            <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                            <Breadcrumb.Item><a href="/">视频列表</a></Breadcrumb.Item>
                            <Breadcrumb.Item><a href="/">文章名</a></Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className='detailed-title'>
                        React实战视频教程
                    </div>
                    <div className='list-icon center'>
                        <span><FieldTimeOutlined/>2020</span>
                        <span><FolderOpenOutlined/>视频教程</span>
                        <span><ReadOutlined/>666人</span>
                    </div>
                    <div className='detailed-content'>
                        markdown解析
                    </div>
                </div>
            </Col>
            <Col className='comm-right' xs={0} sm={0} md={7} lg={5} xl={4}>
                <Author/>
                <Advert/>
            </Col>

        </Row>
        <Footer/>
    </div>
)

export default Detailed