import React, { Component } from 'react'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import '@/style/view-style/button.scss'
import { Layout, Divider, Row, Col, Table, Button } from 'antd'
import { Popconfirm, message } from 'antd';
import { Link } from 'react-router-dom'

function confirm(e) {
    
}

function cancel(e) {
}
const columns = [
    {
        title: '商户',
        dataIndex: 'name',
        key: 'name',
        render: text => <Button type='link'>{text}</Button>
    },
    {
        title: '品种',
        dataIndex: 'price',
        key: 'price'
    },
    {
        title: '详细信息',
        key: 'picture',
        render: (text, record) => (
            <span>
                <Button type='link'><Link to="/show/upload">进入</Link></Button>
            </span>
        )
    },
    {
        title: '通过',
        key: 'modify',
        render: (text, record) => (
            <Popconfirm
                title="确定通过?"
                onConfirm={confirm}
                onCancel={cancel}
                okText="Yes"
                cancelText="No"
            >
                <a href="">通过</a>
            </Popconfirm>
        )
    },
    {
        title: '拒绝',
        key: 'action',
        render: (text, record) => (
            <Popconfirm
                onClick={localStorage.setItem('clickId', text.key)}
                title="确定拒绝?"
                onConfirm={confirm}
                onCancel={cancel}
                okText="Yes"
                cancelText="No"
            >
                <a href="">拒绝</a>
            </Popconfirm>
        )
    }
]
let goodsList = [1,2,3];
const data = [
    {
        key:'1',
        name:'璧山养殖',
        price:'猪肉'
    },
    {
        key: '2',
        name: '南岸李某',
        price: '牛肉'
    },
    {
        key: '3',
        name: '璧山猪场',
        price: '牛群'
    },
    {
        key: '4',
        name: '万州渔户',
        price: '草鱼'
    },
    {
        key: '5',
        name: '南岸虾户',
        price: '自产虾'
    },
    {
        key: '6',
        name: '璧山牛肉',
        price: '非洲牛种'
    },
    {
        key: '7',
        name: '蔬菜商',
        price: '瓜果'
    },
    {
        key: '8',
        name: '万州',
        price: '蔬菜'
    },
]

const Table1 = () => <Table columns={columns} dataSource={data} />
class TableView extends React.Component {
    componentDidMount() {             //进入页面获取信息，展示商家对应的商品
      

    }
    render() {
        return (
            <Layout className='animated fadeIn'>
                <div>
                    <CustomBreadcrumb arr={['审核', '申请列表']}></CustomBreadcrumb>
                </div>

                <Row>
                    <Col>
                        <div className='base-style'>
                            <h3 id='basic'>申请列表</h3>
                            <Divider />
                            <Table1 />
                        </div>
                    </Col>
                </Row>
            </Layout>
        )
    }
}

export default TableView
