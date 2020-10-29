import Head from 'next/head'
import React from 'react'
import {Row, Col, Breadcrumb, Affix} from "antd";
import {FieldTimeOutlined, FolderOpenOutlined, ReadOutlined} from "@ant-design/icons";
import Header from "../components/Header";
import Author from "../components/Author";
import Advert from "../components/Ad";
import Footer from "../components/Footer";
import ReactMarkdown from 'react-markdown'
import MarkNav from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css'
import '../static/style/pages/detailed.css'
import axios from 'axios'

const Detailed = () => {
    let markdown = '# P01:课程介绍和环境搭建\n' +
        '# p07:Vue3.0基础知识讲解\n' +
        '``` var a=11; ```'


    return (
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
                                <Breadcrumb.Item><a href="/list">视频列表</a></Breadcrumb.Item>
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
                            <ReactMarkdown
                                source={markdown}
                                // 不对HTML标签进行转换
                                escapeHtml={false}
                            />
                        </div>
                    </div>
                </Col>
                <Col className='comm-right' xs={0} sm={0} md={7} lg={5} xl={4}>
                    <Author/>
                    <Advert/>
                    <Affix offsetTop={5}>
                        <div className='detailed-nav comm-box'>
                            <div className='nav-title'>文章目录</div>
                            <MarkNav
                                className='article-menu'
                                source={markdown}
                                // headingTopOffer
                                // 是否有编号
                                ordered={false}

                                // 实现图钉效果
                            />
                        </div>
                    </Affix>
                </Col>

            </Row>
            <Footer/>
        </div>
    )
}

Detailed.getInitialProps = async (context) => {
    console.log(context.query.id)

    let id = context.query.id

    const promise = new Promise((resolve => {
        axios('http://127.0.0.1:7001/default/getArticleById/' + id).then(
            (res => {
                console.log(res.data.data[0])
            })
        )
    }))
    return await promise
}

export default Detailed