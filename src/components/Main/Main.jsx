import React from "react";
import {HelpLink} from "../HelpLink/HelpLink";
import { data } from "../../data.js";
import "./main.css";

export const Main = () => {
    return (
        <>
            <div className="main--cont">
                {
                    data.map(v => {
                        return (
                            <HelpLink
                            img={v.img}
                            key={v.id}
                            alt={v.alt}
                            header={v.head}
                            paragraph={v.paragraph}
                            link={v.link}
                            />
                        );
                    })
                }
            </div>
        </>
    )
}