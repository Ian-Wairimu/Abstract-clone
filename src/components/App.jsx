import React, {useEffect, useState} from "react";
import { Nav } from "./Nav/Nav.jsx";
import {PropagateLoader} from "react-spinners";
import "./app.css";
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Footer} from "./Footer/Footer.jsx";

const App = () => {
    const[loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
    return (
        <>
                {loading ? <span className="loader">
                    <PropagateLoader />
                </span>  : (
                    <div>
                        <Nav />
                        <Header />
                        <Main />
                        <Footer />
                    </div>
                )}
        </>
    )
}

export default App;