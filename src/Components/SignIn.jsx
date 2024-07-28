import React from "react";
import '../styles/SignIn.css';
import JeweleryBg from "./JeweleryBg";
import '../styles/home.css';

function SignIn() {
    return (
        <div>
             <img src="/images/background.png" alt="bg_img" style={{
                height: '100vh',
                width: '100%',
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                objectFit: "cover"
            }} />
            
            <JeweleryBg />

            <form class="loginFrom txt">
                <h1>Sign In</h1> <br />
                <label>User ID:</label><br /><br />
                <input type="text" id="userId" name="userId" className="userInput" /><br /><br />
                <label>Password</label><br />
                <input type="password" id="password" name="password" className="userInput"></input><br /><br />
                <div className="form-action" style={{ display: 'flex', alignItems: 'center' }}>
                    <input type="checkbox" id="rememberMe" name="rememberMe" />
                    <label htmlFor="rememberMe">Remember Password</label>
                    <span style={{ marginLeft: 'auto' }}>
                        <a href="">Forgot Password</a>
                    </span>
                </div><br></br>
                <div>
                    <button type="submit" className="signIn">Sign In</button><br /><br />
                    <div className="signup-link">
                        Don't have an account? <a href="#">Sign Up</a>
                    </div>
                </div>
            </form>
        </div>
    );

}

export default SignIn;


