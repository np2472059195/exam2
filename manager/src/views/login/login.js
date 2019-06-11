import React,{Component} from 'react';
import { connect  } from 'dva';
import { Link } from 'dva/router'
import styles from './login.css'

class Login extends Component{

    constructor(props){
        super(props)
        this.state = {
            userName:'',
            userPwd:'',
            nameflag :false,
            psdflag :false
        }
    }

    changeName(e){
        if(e.target.value === 'chenmanjie'){
            this.setState({
                userName : e.target.value,
                nameflag:true
            })
        }
    }

    changePwd(e){
        if(e.target.value === 'chenmanjie123!'){
            this.setState({
                userPwd : e.target.value,
                pwdflag:true
            })
        }
    }

    login(){
        // console.log(this)
        // if(this.state.nameflag && this.state.pwdflag){
        //     console.log(this.props)
        //     let {history} = this.props;
        //     history.push({
        //         pathname:'/home'
        //     })
        // }
    }

    render(){
        let {userName,userPwd} = this.state;
        return (
            <div className={styles.wrapper}>
                <div className={styles.wrap}>
                    <div className={styles.writeIn}>
                        <img src={require("../../assets/yonghu.png")} alt="" />
                        <input type="text" value={userName} placeholder="请输入用户名" onChange={this.changeName.bind(this)} />
                    </div>
                    <div className={styles.writeIn}>
                        <img src={require("../../assets/mima.png")} alt="" />
                        <input type="text" value={userPwd} placeholder="请输入用户密码" onChange={this.changePwd.bind(this)} />
                    </div>
                    <div className={styles.check}>
                        <div>
                            <span></span>
                            <p>记住密码</p>
                        </div>
                        <p>忘记密码</p>
                    </div>
                    <Link className={styles.btn} to="/main">登陆</Link>
                </div>
            </div>
        );
    }
}

// function Login(props) {
//     console.log(props);
//     function changeName(e){
//         console.log(e)
//     }

//     function changePwd(){
//         console.log('222')
//     }

//     function login(){
//         console.log(333)
//     }

//     let {userName,userPwd} = props;
//     return (
//         <div className={styles.wrapper}>
//             <div className={styles.wrap}>
//                 <div className={styles.writeIn}>
//                     <img src={require("../../assets/yonghu.png")} alt="" />
//                     <input type="text" value={userName} placeholder="请输入用户名" onChange={(e)=>{changeName(e)}} />
//                 </div>
//                 <div className={styles.writeIn}>
//                     <img src={require("../../assets/mima.png")} alt="" />
//                     <input type="text" value={userPwd} placeholder="请输入用户密码" onChange={changePwd} />
//                 </div>
//                 <div className={styles.check}>
//                     <div>
//                         <span></span>
//                         <p>记住密码</p>
//                     </div>
//                     <p>忘记密码</p>
//                 </div>
//                 <button className={styles.btn} onClick={login}>登陆</button>
//             </div>
//         </div>
//     );
// }


Login.defaultProps = {
    userName:'111',
    userPwd:'222'
};

Login.propTypes = {

};

export default connect()(Login);