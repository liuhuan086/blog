import {Avatar, Divider} from "antd";
import React from "react";
import '../static/style/components/author.css'
import {GithubFilled, QqCircleFilled, WechatFilled} from "@ant-design/icons";

const Author = () => {
    return (
        <div className='author-div comm-box'>
            <Avatar size={100} src='https://avatars0.githubusercontent.com/u/45306555?s=460&v=4'/>
            <div className='author-introduction'>
                不会敲代码的摄影爱好者不是一个好的伙夫。
                <Divider>社交账号</Divider>
                <Avatar size={38} icon={<QqCircleFilled />} className='account'/>
                <Avatar size={38} icon={<WechatFilled />} className='account'/>
                <Avatar size={38} icon={<GithubFilled />} className='account'/>
            </div>
        </div>
    )
}

export default Author
