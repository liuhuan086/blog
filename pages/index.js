import Head from 'next/head'
import React, {useState} from 'react'
import {Row, Col, List} from "antd";
import axios from 'axios'
import Header from "../components/Header";
import Author from "../components/Author";
import Advert from "../components/Ad";
import Footer from "../components/Footer";
import '../static/style/pages/index.css'
import {FieldTimeOutlined, FireOutlined, VideoCameraOutlined} from "@ant-design/icons";

const Home = (list) => {
    const [myList, setMyList] = useState(list.data )

    return (
        <div>
            <Head>
                <title>Home</title>
            </Head>

            <Header/>

            <Row className='comm-main' type='flex' justify='center'>

                <Col className='comm-left' xs={24} sm={24} md={16} lg={18} xl={14}>
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
                                    <span><FieldTimeOutlined/>{item.add_time}</span>
                                    <span>< VideoCameraOutlined/>{item.typeName}</span>
                                    <span><FireOutlined/>{item.view_count}</span>
                                </div>
                                <div className='list--context'>{item.introduce}</div>
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

Home.getInitialProps = async () => {
    const promise = new Promise((resolve => {
        axios('http://127.0.0.1:7001/default/getArticleList').then(
            (res) => {
                console.log("-------", res.data)
                resolve(res.data)
            }
        )
    }))
    return await promise
}

export default Home

