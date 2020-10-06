import React, { useState } from "react";
import "./Css/home.css";
import Modal from "./Modal";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";


function Home() {
    const [isRegisterModalToggle, setIsRegisterModalToggle] = useState(false);
    function handleRegisterModalToggle() {
        setIsRegisterModalToggle(!isRegisterModalToggle);

    }

    const [isLoginModalToggle, setIsLoginModalToggle] = useState(false);
    function handleLoginModalToggle() {
        setIsLoginModalToggle(!isLoginModalToggle);
    }

    return <div className="main-home">
        <button onClick={handleRegisterModalToggle} className="btn btn-primary">Reagister</button> <br />

        <Modal isOpen={isRegisterModalToggle}
            toggle={handleRegisterModalToggle}
            Header={"Register"}
            Body={<RegisterForm />}
            Footer={
                <button type="button" onClick={handleRegisterModalToggle} className="btn btn-primary">Cancel</button>

            }
        />


        <button onClick={handleLoginModalToggle} className="btn btn-primary"> Login</button>

        <Modal isOpen={isLoginModalToggle}
            toggle={handleLoginModalToggle}
            Header={"Login"}
            Body={<LoginForm />}
            Footer={
                <button type="button" onClick={handleLoginModalToggle} className="btn btn-primary">Cancel</button>

            }
        />
    </div>
}
export default Home;