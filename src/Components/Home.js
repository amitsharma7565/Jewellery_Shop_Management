import React from "react";
import '../styles/home.css';
import { useNavigate } from "react-router-dom";
// import SignUp from "./SignUp";

function Home() {
    const navigate = useNavigate();
    const goToSignUp = () => {
        navigate("/SignUp");
    }
    return (
        <div className="home">
            <img src="/images/background.png" alt="bg_img" className="mphoto" />
            <img src="/images/Jewellery.png" alt="j_img" className="jewelleryRectangle" />
            <div className="jewellaryTxt">
                <h1 className="fw-bold">Jewellery</h1>
                <h2>Shop Management System</h2>
                <p>Streamlining Staff, Vendor, and<br />
                    Customer Management
                </p>
                <button type="button" className="btn btn-signIn mt-3 text-white" value="Sign In" onClick={goToSignUp}>
                    Sign In
                </button>
            </div>
        </div>
    );
}
export default Home;