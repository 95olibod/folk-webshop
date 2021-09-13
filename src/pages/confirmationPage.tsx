import { useContext } from "react";
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

const ConfirmationPage = () => {
  const { addedMovies } = useContext(MovieContext);

  const AddedMoviesList = movies.filter((movie) =>
    addedMovies.includes(movie.id)
  );

  let newArray: MovieData[] = [];

  for (const item of addedMovies) {
    const arr = AddedMoviesList.find((movie) => item === movie.id);
    if (arr) {
      newArray.push(arr);
    }
  }

  //Töm local storage

  const calculateSumPerMovie = (id: number, price: number) => {
    const quantity = newArray.filter((movie) => movie.id === id).length;
    const sum = quantity * price;

    return sum;
  };

  const getQuantityPerMovie = (id: number) => {
    const quantity = newArray.filter((movie) => movie.id === id).length;

    return quantity;
  };

  const subtotal = newArray
    .map(({ price }) => price)
    .reduce((sum: number, i: number) => sum + i, 0);

  return (
    <div className="confirmationContainer">
      <div className="padding">
        <div className="confirmationInformationContainer">
          <p className="confirmText">
            Tack för din order! Vi har skickat en orderbekräftelse till
            kalle.hansson.blomberg@hotmail.com
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
              {AddedMoviesList.map((movie) => (
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
                  {subtotal} kronor
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
export default ConfirmationPage;
