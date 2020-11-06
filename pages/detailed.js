import Head from 'next/head'
import React from 'react'
import {Icon, Row, Col, Breadcrumb, Affix} from "antd";
import Header from "../components/Header";
import Author from "../components/Author";
import Advert from "../components/Ad";
import Footer from "../components/Footer";
import MarkNav from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css'
import '../static/style/pages/detailed.css'
import axios from 'axios'

import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
import Tocify from "../components/tocify.tsx";

import servicePath from "../config/apiUrl";

const Detailed = (props) => {

    const tocify = new Tocify()

    // 使用marked必须要要用的
    const renderer = new marked.Renderer()

    renderer.heading = function (text, level, raw) {
        const anchor = tocify.add(text, level)
        return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`
    }
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

    let html = marked(props.article_content)

    return (
        <div>
            <Head>
                <title>{props.title}</title>
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
                            <h1>{props.title}</h1>
                        </div>
                        <div className='list-icon center'>
                            <span><Icon type="calendar"/>{props.add_time}</span>
                            <span><Icon type="folder"/>{props.typeName}</span>
                            <span><Icon type="fire"/>{props.view_count}</span>
                        </div>
                        <div className='detailed-content'
                             dangerouslySetInnerHTML={{__html: html}}
                        >
                        </div>
                    </div>
                </Col>
                <Col className='comm-right' xs={0} sm={0} md={7} lg={5} xl={4}>
                    <Author/>
                    <Advert/>
                    <Affix offsetTop={5}>
                        <div className='detailed-nav comm-box'>
                            <div className='nav-title'>文章目录</div>
                            {tocify && tocify.render()}
                            <MarkNav
                                className='article-menu'
                                source={html}
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

    let id = context.query.id

    const promise = new Promise((resolve => {
        axios(servicePath.getArticleById + id).then(
            (res => {
                resolve(res.data.data[0])
            })
        )
    }))

    console.log(promise)
    return await promise
}

export default Detailed