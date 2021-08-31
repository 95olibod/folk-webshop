import React from "react";
// import './App.css';
import Header from "../header/header";
import Movie from "../movie/MovieGrid";

function App() {
    return (
        <body>
            <header>
                <div>
                    <Header />
                </div>
            </header>

            <main>
                <div>
                    <Movie />
                </div>
            </main>
        </body>
    );
}

export default App;
