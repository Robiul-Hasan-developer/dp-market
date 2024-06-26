import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DashboardStateContext } from '../contextApi/DashboardStateContext';

const LoginSection = () => {

    const { userNameData, setUserNameData } = useContext(DashboardStateContext);
    
    // Navigate to Dashboard
    const navigate = useNavigate(); 

    const handleNavigate = () => {
        navigate('/dashboard', { state: { userNameData } });
    };


    // Password Show hide
    const [showHidePassword, setShowHidePassword] = useState(false);

    const handleShowHidePassword = () => {
        setShowHidePassword(!showHidePassword)
    }

    // State Lifting data
    const handleUserNameDataChange = (event) => {
        setUserNameData(event.target.value);
    };

    return (
        <form action="#">
            <div className="row gy-4">
                <div className="col-12">
                    <label htmlFor="userName" className="form-label mb-2 font-18 font-heading fw-600">User Name</label>
                    <div className="position-relative">
                        <input type="userName" name='userName' className="common-input common-input--bg common-input--withIcon" onChange={handleUserNameDataChange} id="userName" placeholder="infoname@mail.com"/>
                        <span className="input-icon"><img src="assets/images/icons/envelope-icon.svg" alt=""/></span>
                    </div>
                </div>
                <div className="col-12">
                    <label htmlFor="your-password" className="form-label mb-2 font-18 font-heading fw-600">Password</label>
                    <div className="position-relative">
                        <input type={`${showHidePassword ? 'text' : 'password'}`} name='password' className="common-input common-input--bg common-input--withIcon" id="your-password" placeholder="6+ characters, 1 Capital letter"/>
                        <span className="input-icon toggle-password cursor-pointer" id="#your-password" onClick={handleShowHidePassword}>
                            <img src="assets/images/icons/lock-icon.svg" alt=""/>
                        </span>
                    </div>
                </div>
                <div className="col-12">
                    <div className="flx-between gap-1">
                        <div className="common-check my-2">
                            <input className="form-check-input" type="checkbox" name="checkbox" id="keepMe"/>
                            <label className="form-check-label mb-0 fw-400 font-14 text-body" htmlFor="keepMe">Keep me signed in</label>
                        </div>
                        <Link to="#" className="forgot-password text-decoration-underline text-main text-poppins font-14">Forgot password?</Link>
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-main btn-lg w-100 pill" onClick={handleNavigate }>
                        Sign In
                    </button>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-outline-light btn-lg-icon btn-lg w-100 pill">
                        <span className="icon icon-left"><img src="assets/images/icons/google.svg" alt=""/></span> 
                        Sign in with google
                    </button>
                </div>
                <div className="col-sm-12 mb-0">
                    <div className="have-account">
                        <p className="text font-14">New to the market? <Link  to="/register" className="link text-main text-decoration-underline fw-500">sign up</Link></p>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default LoginSection;