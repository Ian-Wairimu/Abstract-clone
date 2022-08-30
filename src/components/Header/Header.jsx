import React from "react";
import "./header.css";

export const Header = () => {
    return (
        <>
            <div className="header--container">
                <h1 className="header--h1">How can we help?</h1>
                <div className="form--cont">
                    <input type="search" placeholder="Search" className="header--input"/>
                </div>
            </div>
        </>
    );
}