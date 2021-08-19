import React from "react";
import {GoogleSquareFilled, FacebookFilled} from '@ant-design/icons';

import './Login.css';

const Login = () => {
    return (
        <div className="login-page">
            <div className="login-card">
                <h2>Welcome To Let's Chat!</h2>

                <div className="login-button google">
                    <GoogleSquareFilled /><span>Sign In with Google</span>
                </div>

                <br/><br/>

                <div className="login-button facebook">
                    <FacebookFilled /><span>Sign In with Facebook</span>
                </div>
            </div>
        </div>
    );
}

export default Login;