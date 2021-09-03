import React from 'react';
import Header from '../header/header';
import Navbar from '../navbar/navbar';
import Movie from "../movie/movieGrid";

function Layout() {
  return (
    <div>
      <Navbar />
      <Header />
      
      <Movie />
    </div>     
  );
}

export default Layout;
