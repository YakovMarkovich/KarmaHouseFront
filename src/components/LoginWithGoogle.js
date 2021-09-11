import React, {useState} from 'react';
import style from "../css_modules/loginWithGoogle.module.css";
import GoogleLogin from 'react-google-login';
import GoogleButton from 'react-google-button'
import deletet from "../Images/deletet.png";
import {authAPI} from "../api/ajax"
import HomesList from "./HomesList";
import HomeListFirstTime from "./HomeListFirstTime";

const LoginWithGoogle = () => {
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[url, setUrl] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");
    const [firstTime, setFirstTime] = useState(true);
    const [userId, setUserId] =useState('');


    function changeFirstTime() {
        setFirstTime(false);
    }

    function setTokenOperationsRegister(response, responseGoogle) {
        setStates(responseGoogle);
        localStorage.setItem('token', response.headers['x-token']);
        setToken(response.headers['x-token']);
        setUserId(response.data.id);
    }

    function setTokenOperationsLogin(response, responseGoogle) {
        setStates(responseGoogle);
        localStorage.setItem('token', response.headers['x-token']);
        changeFirstTime();
        setToken(response.headers['x-token']);
        setUserId(response.data.id);
    }

    function setStates(response) {
        setName(response.profileObj.name);
        setEmail(response.profileObj.email);
        setUrl(response.profileObj.imageUrl);
        setPassword(response.profileObj.googleId);
    }

    const responseGoogle = (response) => {
        console.log(response);
        console.log(response.profileObj.imageUrl);
        // setStates(response);
        if(!localStorage.getItem('token') && firstTime) {
            authAPI.signin(response.profileObj.name, response.profileObj.name, response.profileObj.email, response.profileObj.googleId).then(res => setTokenOperationsRegister(res, response));
        }
        else {
            authAPI.login(response.profileObj.name, response.profileObj.googleId).then(res => setTokenOperationsLogin(res, response));
        }
    }

    return (
        token && firstTime ? <HomeListFirstTime changeFirstTime={changeFirstTime} name={name} image={url} userId={userId}/> :
            token ? <HomeListFirstTime image={url} name={name} userId={userId}/> :
        <div className="container-fluid">
            <div className={style.app}>
                <p className={style.name}>Welcome Home!</p>
            </div>
            <div className={style.app}>
                <GoogleLogin
                             clientId="385216338714-v4epnh0c8tv62csol038gvj9088e0l0m.apps.googleusercontent.com"
                             // render={renderProps => (
                             //     <button onClick={renderProps.onClick} style={{width: "200px", height: "50px",
                             //         borderRadius: "30px", backgroundColor: "#eb4444", color:"#FFFFFF"}}>LOGIN WITH GOOGLE</button>
                             // )}
                             render={renderProps => (
                                 <GoogleButton type="light" style={{ fontSize: "12px",
                                      backgroundColor: "#eb4444"}} onClick={renderProps.onClick} disabled={renderProps.disabled}></GoogleButton>
                             )}
                             // buttonText="LOGIN WITH GOOGLE"
                             onSuccess={responseGoogle}
                             onFailure={responseGoogle}
                />
            </div>
            <div>
                <img className={style.image} src={deletet} alt={'deletet'}/>
            </div>


        </div>
    );
};

export default LoginWithGoogle;