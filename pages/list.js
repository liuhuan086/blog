import Head from 'next/head'
import React, {useState} from 'react'
import {Icon, Row, Col, List, Breadcrumb} from "antd";
import Header from "../components/Header";
import Author from "../components/Author";
import Advert from "../components/Ad";
import Footer from "../components/Footer";
// import {FieldTimeOutlined, FireOutlined, VideoCameraOutlined} from "@ant-design/icons";

const Home = () => {
    const [myList, setMyList] = useState(
        [
            {
                title: 'python从入门到放弃',
                context: 'python学习笔记.........................................'
            },
            {
                title: 'golang，从内存泄漏到死锁',
                context: 'golang学习笔记..........................................'
            },
            {
                title: '从高可用集群到宕机',
                context: 'k8s学习笔记..........................................'
            },
            {
                title: '从宕机到被脱库',
                context: '网络安全学习笔记..........................................'
            },
        ]
    )

    return (
        <div>
            <Head>
                <title>Home</title>
            </Head>

            <Header/>

            <Row className='comm-main' type='flex' justify='center'>

                <Col className='comm-left' xs={24} sm={24} md={16} lg={18} xl={14}>
                    <div className='bread-div'>
                        <Breadcrumb>
                            <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                            <Breadcrumb.Item><a href="/">视频</a></Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <List
                        header={
                            <div>最新日志</div>
                        }

                        itemLayout='vertical'
                        dataSource={myList}
                        renderItem={item => (
                            <List.Item>
                                <div className='list-title'>{item.title}</div>
                                <div className='list-icon'>
                                    <span><Icon type="calendar"/> 2020-10-28</span>
                                    <span><Icon type="folder"/> 视频教程</span>
                                    <span><Icon type="fire"/> 5498人</span>
                                </div>
                                <div className='list--context'>{item.context}</div>
                            </List.Item>
                        )}
                    />
                </Col>

                <Col className='comm-right' xs={0} sm={0} md={7} lg={5} xl={4}>
                    <Author/>
                    <Advert/>
                </Col>
            </Row>

            <Footer/>

        </div>
    )
}

export default Home

