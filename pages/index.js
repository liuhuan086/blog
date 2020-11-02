import Head from 'next/head'
import React, {useState} from 'react'
import {Icon, Row, Col, List} from "antd";
import Link from 'next/link'
import axios from 'axios'
import Header from "../components/Header";
import Author from "../components/Author";
import Advert from "../components/Ad";
import Footer from "../components/Footer";
import servicePath from "../config/apiUrl";
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
import '../static/style/pages/index.css'


const Home = (list) => {
    const [myList, setMyList] = useState(list.data)
    const renderer = new marked.Renderer()

    // 所有设置的属性都在这里配置
    marked.setOptions({
        renderer: renderer,
        // 样式和markdown类似
        gfm: true,
        // 容错机制，如果markdown格式不正确，是否渲染, false即使错误也渲染
        pedantic: false,
        // 是否忽略html标签，false会渲染
        sanitize: false,
        // 允许我们输出表格样式是GitHub样式
        tables: true,
        //是否支持GitHub换行符
        breaks: false,
        // 自动渲染劣列表
        smartLists: true,
        // 代码高亮显示
        highlight: function (code) {
            return hljs.highlightAuto(code).value
        }
    })
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
                                <div className='list-title'>
                                    <Link href={{pathname: '/detailed', query: {id: item.id}}}>
                                        <a>{item.title}</a>
                                    </Link>
                                </div>

                                <div className='list-icon'>
                                    <span><Icon type="calendar"/> {item.add_time}</span>
                                    <span><Icon type="folder"/> {item.typeName}</span>
                                    <span><Icon type="fire"/> {item.view_count}人</span>
                                </div>
                                <div
                                    className='list--context'
                                    dangerouslySetInnerHTML={{__html: marked(item.introduce)}}
                                >
                                </div>
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
        axios(servicePath.getArticleList).then(
            (res) => {
                // console.log("-------", res.data)
                resolve(res.data)
            }
        )
    }))
    return await promise
}

export default Home

