import { useContext, useEffect } from "react";
import { MovieData, movies } from "../components/movie/movie";
import { MovieContext } from "../contexts/movieContext";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./styles/confirmationPage.css";
import { Redirect } from "react-router";

//Component to display confirmation message after order is confirmed
const ConfirmationPage = () => {
  //Get user email info from local storage
  const userEmail = JSON.parse(localStorage.getItem("userData") || "[]");

  //Use context
  const { addedMovies } = useContext(MovieContext);

  //Filter movies to know which movies were in cart
  const filteredAddedMoviesList = movies.filter(item => addedMovies.some(d => d.id === item.id))
  ;  

  //Get the information for of every specific movie that were in cart
  let displayArray: MovieData[] = [];
  for (const item of addedMovies) {
    const movie = filteredAddedMoviesList.find((movie) => item.id === movie.id);
    if (movie) {
      displayArray.push(movie);
    }
  }

  // Calculates the total sum for a specific movie
  const calculateSumPerMovie = (id: number, price: number) => {
    const quantity = displayArray.filter((movie) => movie.id === id).length;
    const sum = quantity * price;

    return sum;
  };

  // Calculates the added number of a specific movie
  const getQuantityPerMovie = (id: number) => {
    const quantity = displayArray.filter((movie) => movie.id === id).length;

    return quantity;
  };

  // Calculates the total price for all added movies
  const subtotal = displayArray
    .map(({ price }) => price)
    .reduce((sum: number, i: number) => sum + i, 0);

  //Empty added movies and local storage so cart is empty after order is confirmed
  useEffect(() => {
    localStorage.clear();
    addedMovies.length = 0;
  });

  //If reload of page occurs when confirmation has been shown, user gets redirected to front page.
  if (addedMovies.length === 0) {
    return <Redirect to="/" />;
  } else {
    return (
      <div className="confirmationContainer">
        <div className="confirmationInformationContainer">
          <p className="confirmText">
            Tack för din order! Vi har skickat en orderbekräftelse till
            {" " + userEmail}. Nedan finner du en sammanställning av din order.
            Välkommen åter!
          </p>
        </div>
        <TableContainer className="table" component={Paper}>
          <Table aria-label="spanning table">
            <TableHead>
              <TableRow>
                <TableCell>Titel</TableCell>
                <TableCell align="right">Antal</TableCell>
                <TableCell align="right">Pris</TableCell>
                <TableCell align="right">Summa</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredAddedMoviesList.map((movie) => (
                <TableRow key={movie.id}>
                  <TableCell>{movie.title}</TableCell>
                  <TableCell align="right">
                    {getQuantityPerMovie(movie.id)}
                  </TableCell>
                  <TableCell align="right">{movie.price}</TableCell>
                  <TableCell align="right">
                    {calculateSumPerMovie(movie.id, movie.price)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TableContainer className="table" component={Paper}>
          <Table aria-label="spanning table">
            <TableBody>
              <TableRow>
                <TableCell className="totalBold" colSpan={3}>
                  Totalsumma
                </TableCell>
                <TableCell className="totalBold" align="right">
                  {subtotal} SEK
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
};
export default ConfirmationPage;
