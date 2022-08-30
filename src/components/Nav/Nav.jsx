import React from "react";
import Logo from "../../assets/abstract.svg";
import Button from "../Button/Button.jsx";
import "./nav.css";

export const Nav = () => {
    return (
      <>
        <nav className="nav--con">
            <div className="div--con_left">
            <img src={Logo} alt="image logo" className="nav--logo"/>
                <h1>
                    <span className="nav--help">
                        Help Center
                    </span>
                </h1>
            </div>
            <div>
                <Button className="btn nav--submit" name="Submit a request" />
                <Button className="btn nav--sign" name="Sign in" />
            </div>
        </nav>
      </>
    );
}