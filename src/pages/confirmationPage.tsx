import { CSSProperties, useContext } from "react";
import { MovieData, movies } from "../components/movie/movie";
import { MovieContext } from "../contexts/movieContext";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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
    <div style={confirmationContainer}>
      <div style={padding}>
        <div style={confirmationInformationContainer}>
          <p style={confirmText}>
            Tack för din order! Vi har skickat en orderbekräftelse till
            kalle.hansson.blomberg@hotmail.com
          </p>
        </div>
        <TableContainer style={table} component={Paper}>
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
        <TableContainer style={table} component={Paper}>
          <Table aria-label="spanning table">
            <TableBody>
              <TableRow>
                <TableCell style={totalBold} colSpan={3}>
                  Totalsumma
                </TableCell>
                <TableCell style={totalBold} align="right">
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

const confirmationContainer: CSSProperties = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: "0.5rem",
  position: "absolute",
  top: "6rem",
};
const confirmText: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  textAlign: "center",
  margin: "0.5rem",
};

const confirmationInformationContainer: CSSProperties = {
  display: "flex",
  backgroundColor: "white",
  flexGrow: 1,
  maxWidth: "40rem",
  borderRadius: "4px",
};

const table: CSSProperties = {
  display: "flex",
  flexGrow: 1,
  maxWidth: "40rem",
  marginTop: "0.5rem",
};

const totalBold: CSSProperties = {
  fontWeight: "bold",
};

const padding: CSSProperties = {
  padding: "0.5rem",
};

export default ConfirmationPage;
