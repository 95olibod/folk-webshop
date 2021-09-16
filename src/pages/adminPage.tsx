import { movies } from "../components/movie/movie";
import MovieCard from "../components/movie/cards/movieCard";
import "./styles/homePage.css";
import AdminMovieDetailCard from "../components/admin/adminMovieDetailCard";

const AdminPage = () => {


      
    
      return(        
            


            ///Read
    <div className="outerDiv">    
      <div className="movieContainer">
        {movies.map((movie) => (
          <AdminMovieDetailCard key={movie.id} movie={movie} />
        ))}
      
    </div>
    </div>

    );
}
export default AdminPage;


