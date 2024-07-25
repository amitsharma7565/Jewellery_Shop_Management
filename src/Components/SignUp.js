import React from "react";
import '../styles/Sign-Up.css';
import '../styles/home.css';

import { useNavigate } from "react-router-dom";
import JeweleryBg from "./JeweleryBg";
function SignUp() {
    const navigate = useNavigate();
    const goToCustomerLogin = () => {
        navigate("/Signin")
    }
    return (
        <div className="signUp">
             <img src="/images/background.png" alt="bg_img" style={{
                height: '100vh',
                width: '100%',
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                objectFit: "cover"
            }} />
            <JeweleryBg />
            <div className="jewellaryTxt">
                <h3>Are you a Customer</h3>
                <button type="button" className="btn btn-signIn mt-3 text-white customerButton" value="customer sign in" onClick={goToCustomerLogin}>
                    Customer Sign in
                </button><br /><br />
                <h3>If not, then sign in for</h3>
                <button type="button" className="btn btn-signIn mt-3 me-4 text-white venderButton" value="Vender Management">
                    Vender Management
                </button>
                <button type="button" className="btn btn-signIn mt-3 text-white staffButton" value="Staff Management">
                    Staff Management
                </button>
            </div>
        </div>
    );
}
export default SignUp;