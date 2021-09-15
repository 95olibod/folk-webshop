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
import "./confirmationPage.css";
import { Redirect } from "react-router";

const ConfirmationPage = () => {
  const userEmail = JSON.parse(localStorage.getItem("userData") || "[]");

  const { addedMovies } = useContext(MovieContext);

  const filteredAddedMoviesList = movies.filter((movie) =>
    addedMovies.includes(movie.id)
  );

  let displayArray: MovieData[] = [];

  for (const item of addedMovies) {
    const movie = filteredAddedMoviesList.find((movie) => item === movie.id);
    if (movie) {
      displayArray.push(movie);
    }
  }

  const calculateSumPerMovie = (id: number, price: number) => {
    const quantity = displayArray.filter((movie) => movie.id === id).length;
    const sum = quantity * price;

    return sum;
  };

  const getQuantityPerMovie = (id: number) => {
    const quantity = displayArray.filter((movie) => movie.id === id).length;

    return quantity;
  };

  const subtotal = displayArray
    .map(({ price }) => price)
    .reduce((sum: number, i: number) => sum + i, 0);

  useEffect(() => {
    localStorage.clear();
    addedMovies.length = 0;
  });

  if (addedMovies.length === 0) {
    return <Redirect to="/" />;
  } else {
    return (
      <div className="confirmationContainer">
        <div className="padding">
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
      </div>
    );
  }
};
export default ConfirmationPage;
