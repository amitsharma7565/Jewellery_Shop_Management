    import React from "react";
    import  '../styles/Sign-Up.css';
    function SignUp(){
        return(
            <div className="signUp">
                <img src="/images/background.png" alt="backgroundPhoto" ></img>
                <div className="signUpText">
                <h3>Are you a Customer</h3>
                <button type="button" className="btn btn-signIn mt-3 text-white" value="customer sign in">
                Customer Sign in
                </button>
                <h3>If not, then sign in for</h3>
                <button type="button" className="btn btn-signIn mt-3 text-white" value="Vender Management">
                    Vender Management
                </button>
                <button type="button" className="btn btn-signIn mt-3 text-white" value="Staff Management">
                    Staff Management
                </button>
                </div>
            </div>
        );
    }
    export default SignUp;