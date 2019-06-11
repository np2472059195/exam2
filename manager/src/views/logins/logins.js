// import React, { Component } from "react";
import React, { useState, useEffect } from "react";
import { connect } from "dva";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
// import styles from "./logins.css";
// import styles from './logins.css';
// import "./logins.css"
// class LoginPage extends Component {
//     componentDidMount() {
//         let { login } = this.props;
//         login({
//             user_name: 'chenmanjie',
//             user_pwd: 'Chenmanjie123!'
//         })
//     }
//     render() {
//         return (
//             <div className={styles.wrap}></div>
//         )
//     }
// }
function LoginPage(props) {
    //获取login
    let { login } = props;
    useEffect(() => {
        login({
            user_name: "chengmanjie",
            user_pwd: "Chenmanjie123!"
        })
    }, [])//数组中值改变才会执行，否则只执行一次
    //处理表单提交
    let handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                //调登陆接口
                login({
                    user_name: values.username,
                    user_pwd: values.userpwd
                })
            }
        });
    };

    //表单校验
    const { getFieldDecorator } = props.form;
    return ( <Form onSubmit={handleSubmit} className="login-form">
            <Form.Item>
                {getFieldDecorator('username', {
                    validateTrigger : 'onBlur',
                    rules: [{ required: true, message: '请输入你的用户名' }],//校验规则
                })(
                    <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Username"
                    />,
                )}
            </Form.Item>
            <Form.Item>
                {getFieldDecorator('password', {
                    rules: [{ required: /^(?:(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])).*$/, message: '请输入正确的密码' }],
                })(
                    <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="Password"
                    />,
                )}
            </Form.Item>
            <Form.Item>
                {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                })(<Checkbox>记住密码</Checkbox>)}
                <a className="login-form-forgot" href="">
                    忘记密码
              </a>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    登录
              </Button>
                Or <a href="">register now!</a>
            </Form.Item>
        </Form>
    );
}
//props的类型检查
LoginPage.propstypes = {

}
//props的默认值
LoginPage.defaultProps = {

}
const mapStateToProps = state => {
    console.log("state...", state);
    return {}
}
const mapDispatchToProps = dispatch => {
    return {
        login(payload) {
            dispatch({
                type: "user/login",
                payload
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(LoginPage))