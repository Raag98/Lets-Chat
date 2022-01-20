import React from "react";
import {GoogleSquareFilled, FacebookFilled} from '@ant-design/icons';
import "firebase/app";
import firebase from 'firebase/app';
import { auth } from './firebase';
import './Login.css';

function Login() {
    return (
        <div className="login-page">
            <div className="login-card">
                <h2>Welcome To Let's Chat!</h2>

                <div className="login-button google" onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
                    <GoogleSquareFilled /><span>Sign In with Google</span>
                </div>

                <br/><br/>

                <div className="login-button facebook" onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}>
                    <FacebookFilled /><span>Sign In with Facebook</span>
                </div>
            </div>
        </div>
    );
}

export default Login;