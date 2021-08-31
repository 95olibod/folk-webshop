
import React from 'react';
import Header from '../header/header';
import Navbar from '../navbar/Navbar';
import Movie from "../movie/MovieGrid";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Header/>
      <Movie />
    </div>     
  );
}

export default App;
