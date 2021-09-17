import { movies } from "../components/movie/movie";
import MovieCard from "../components/movie/cards/movieCard";
import "./styles/homePage.css";
import AdminMovieDetailCard from "../components/admin/adminMovieDetailCard";
import { useContext } from "react";
import { MovieContext } from "../contexts/movieContext";

const AdminPage = () => {


  const { newMovies } = useContext(MovieContext);

  const allMovies = movies.concat(newMovies)

      
    
      return(        
            


            ///Read
    <div className="outerDiv">    
      <div className="movieContainer">
        {allMovies.map((movie) => (
          <AdminMovieDetailCard key={movie.id} movie={movie} />
        ))}
      
    </div>
    </div>

    );
}
export default AdminPage;


