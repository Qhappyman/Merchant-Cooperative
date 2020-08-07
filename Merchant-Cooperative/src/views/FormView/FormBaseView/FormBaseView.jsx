import React, { Component } from 'react'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import { Layout, Divider, Row, Col, Table, Button } from 'antd'
import '@/style/view-style/form.scss'
import { Popconfirm} from 'antd';
import { Link } from 'react-router-dom'



function confirm(e) {

}

function cancel(e) {
}
const columns = [
    {
        title: '商户名',
        dataIndex: 'name',
        key: 'name',
        render: text => <Button type='link'><Link to="/form/modify">{text}</Link></Button>
    },
    {
        title: '描述',
        dataIndex: 'price',
        key: 'price'
    },
    {
        title: '地址',
        key: 'address',
        dataIndex:'address'
    },
    {
        title: '查看产品',
        key: 'modify',
        render: (text, record) => (
            <span>
                <Button type='link'><Link to="/show/table">查看</Link></Button>
            </span>
        )
    },
    {
        title: '解除商户',
        key: 'action',
        render: (text, record) => (
            <Popconfirm
                onClick={localStorage.setItem('clickId', text.key)}
                title="确定删除?"
                onConfirm={confirm}
                onCancel={cancel}
                okText="Yes"
                cancelText="No"
            >
                <a href="">删除</a>
            </Popconfirm>
        )
    }
]
let goodsList = [1, 2, 3];
const data = [
    {
        key: '1',
        name: '璧山养殖',
        price: '南岸区，以畜牧业为主',
        address:'璧山区'
    },
    {
        key: '2',
        name: '南岸李某',
        price: '主要生产农作物',
        address:'南岸区'
    },
    {
        key: '3',
        name: '璧山猪场',
        price: '优质猪种类，无病菌',
        address:'璧山区'
    },
    {
        key: '4',
        name: '万州渔户',
        price: '纯家养鱼类，保证新鲜度',
        address:'万州区'
    },
    {
        key: '5',
        name: '南岸虾户',
        price: '统一管理养殖的大体型虾',
        address:'南岸区'
    },
    {
        key: '6',
        name: '璧山牛肉',
        price: '川蜀牛肉专供地',
        address:'璧山区'
    },
    {
        key: '7',
        name: '蔬菜商',
        price: '农家肥浇灌的天然蔬菜',
        address:'沙坪坝区'
    },
    {
        key: '8',
        name: '万州',
        price: '以捕鱼为主',
        address:'万州区'
    },
]

const Table1 = () => <Table columns={columns} dataSource={data} />
class FromView extends React.Component {
    componentDidMount() {             //进入页面获取信息，展示商家对应的商品


    }
    render() {
        return (
            <Layout className='animated fadeIn'>
                <div>
                    <CustomBreadcrumb arr={['商家信息', '商户列表']}></CustomBreadcrumb>
                </div>

                <Row>
                    <Col>
                        <div className='base-style'>
                            <h3 id='basic'>商户</h3>
                            <Divider />
                            <Table1 />
                        </div>
                    </Col>
                </Row>
            </Layout>
        )
    }
}

export default FromView