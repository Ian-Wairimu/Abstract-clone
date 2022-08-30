import React from "react";
import "./help.css";

export const HelpLink = ({img, alt, header, paragraph, link}) => {
    return(
        <>
            <div className="main-link-cont">
                <div className="img--cont">
                    <img className="images" src={img} alt={alt} />
                </div>
                <div className="content--con">
                    <h1 className="link--h1">{header}</h1>
                    <p className="link--p">{paragraph}</p>
                    <a href={link} className="link--a">Learn More -></a>
                </div>
            </div>
        </>
    );
}