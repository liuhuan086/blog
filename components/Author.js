import {Avatar, Divider} from "antd";
import React from "react";
import '../static/style/components/author.css'
import {GithubFilled, QqCircleFilled, WechatFilled} from "@ant-design/icons";

const Author = () => {
    return (
        <div className='author-div comm-box'>
            <Avatar size={100} src='https://tva1.sinaimg.cn/crop.0.0.439.439.1024/944ba202jw8eyo04t9t17j20c80c8gmt.jpg?KID=imgbed,tva&Expires=1604032677&ssig=2d6rkRHtyn'/>
            <div className='author-introduction'>
                不会敲代码的业余摄影师不是一个好的伙夫。
                <Divider>社交账号</Divider>
                <Avatar size={38} icon={<QqCircleFilled />} className='account'/>
                <Avatar size={38} icon={<WechatFilled />} className='account'/>
                <Avatar size={38} icon={<GithubFilled />} className='account'/>
            </div>
        </div>
    )
}

export default Author
