import React from "react";
import Header from "../header/header";
import Navbar from "../navbar/Navbar";
import Movie from "../movie/MovieGrid";
import { BrowserRouter } from "react-router-dom";

const style: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
};

function App() {
    return (
        <div style={style}>
            <BrowserRouter>
                <Navbar></Navbar>
                <Header />
                <Movie />
            </BrowserRouter>
        </div>
    );
}

export default App;
