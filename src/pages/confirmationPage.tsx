import { CSSProperties, useContext } from "react";
import { MovieData, movies } from "../components/movie/movie";
import { MovieContext } from "../contexts/movieContext";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

interface Props {
    movie: MovieData;
}

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

    console.log(newArray);
    //Töm local storage

    const useStyles = makeStyles({
        table: {
            minWidth: 700,
        },
    });

    const test = () => {
        const quantity = newArray.filter((movie) => movie.id === id).length;
        const sum = quantity * price;
        // console.log(id);
        console.log(quantity);

    
    }

    function priceRow(qty: number, unit: number) {
        return qty * unit;
    }

    function createRow(desc: string, qty: number, unit: number) {
        const price = priceRow(qty, unit);
        return { desc, qty, unit, price };
    }

    // function subtotal(AddedMoviesList:MovieData) {
    //     return AddedMoviesList
    //         .map(({ price }) => price)
    //         .reduce((sum: number, i: number) => sum + i, 0);
    // }

    // const rows = [
    //     createRow("Paperclips (Box)", 100, 1.15),
    //     createRow("Paper (Case)", 10, 45.99),
    //     createRow("Waste Basket", 2, 17.99),
    // ];

    // const invoiceSubtotal = subtotal(rows);
    // const invoiceTaxes = TAX_RATE * invoiceSubtotal;
    // const invoiceTotal = invoiceTaxes + invoiceSubtotal;

    const classes = useStyles();

    //summering av order
    //Tack för beställning
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="spanning table">
                <TableHead>
                    {/* <TableRow>
                        <TableCell align="center" colSpan={3}>
                            Details
                        </TableCell>
                        <TableCell align="right">Price</TableCell>
                    </TableRow> */}
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
                            <TableCell align="right">{movie.id}</TableCell>
                            <TableCell align="right">{movie.price}</TableCell>
                            <TableCell align="right">
                                {ccyFormat(movie.id, movie.price)}
                            </TableCell>
                        </TableRow>
                    ))}

                    <TableRow>
                        <TableCell colSpan={2}>Total</TableCell>
                        <TableCell align="right">
                            {/* {ccyFormat(invoiceTotal)} */}
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

const dataGrid: CSSProperties = {
    color: "white",
    display: "flex",
    justifyContent: "flex-start",
};
const style: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    color: "white",
    alignItems: "center",
};

const confirmationObject: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    color: "white",
    alignItems: "center",
    backgroundColor: "red",
};
const confirmationListStyle: CSSProperties = {
    listStyleType: "none",
    display: "flex",
    width: 200,
};

export default ConfirmationPage;
