import { Form, Input, InputNumber, Button } from 'antd';
import React from 'react'
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};


const FormView = () => {
    const onFinish = values => {
        console.log(values);
    };

    return (
        <div style={{width:'50%',backgroundColor:'white',borderRadius:'5px',height:'450px',margin:'auto',marginTop:'80px',padding:'80px 150px 20px 50px'}}>
        <div style={{fontSize:'25px',marginBottom:'50px',marginLeft:'200px'}}>商户信息</div>
        <Form {...layout} name="nest-messages" onFinish={onFinish} >
            <Form.Item name={['user', 'name']} label="商户名" rules={[{ required: true }]}>
                <Input placeholder='璧山虾户'/>
            </Form.Item>
            <Form.Item name={['user', 'email']} label="联系电话" rules={[{ type: 'email' }]}>
                <Input placeholder='15154788748'/>
            </Form.Item>
            <Form.Item name={['user', 'email']} label="地址" rules={[{ type: 'email' }]}>
                <Input placeholder='璧山区'/>
            </Form.Item>
            <Form.Item name={['user', 'website']} label="描述">
                <Input placeholder='以捕虾为主，新鲜水产品'/>
            </Form.Item>
            
        </Form>
        </div>
    );
};

export default FormView