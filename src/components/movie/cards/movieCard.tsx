import Button from "../button/button";
import { MovieData } from "../movie";
import Snackbar, { SnackbarOrigin } from "@material-ui/core/Snackbar";
import "../movie.css";
import { FC, useState } from "react";
import { useContext } from "react";
import { MovieContext } from "../../../contexts/movieContext";
import { Link } from "react-router-dom";
import { createStyles, makeStyles, Paper, Theme } from "@material-ui/core";


export interface State extends SnackbarOrigin {
    open: boolean;
}

interface Props {
    movie: MovieData;
}

//Styles for component
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            padding: theme.spacing(2),
            margin: "0.2rem",
            maxWidth: 500,
        },
    })
);

//Displays movies on homepage 
const MovieCard: FC<Props> = ({ movie}) => {
    const { addToAddedMovies } = useContext(MovieContext);

    //Sets url for routing
    const url = `/details/${movie.id}`;

    //Implement styles
    const classes = useStyles();

    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

    const handleClick = (movie: MovieData) => {
        addToAddedMovies(movie.id);
        setIsSnackbarOpen(true);
    };

    const hideSnackbar = () => setIsSnackbarOpen(false);

    return (
        <Paper className={classes.paper}>
            <div className="movie-homepage-card">
                <Link to={url}>
                    <img
                        className="homepage-image"
                        key={movie.id}
                        src={movie.imageUrl}
                        alt=""
                    />
                </Link>
                <p>{movie.title}</p>
                <p className="details-p">{movie.price} SEK</p>
            <Button onClick={() => handleClick(movie)} />  
            </div>                    
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                open={isSnackbarOpen}
                autoHideDuration={3000}
                onClose={hideSnackbar}
                message="Produkten tillagd i varukorg"
            />
        </Paper>
    );
};

export default MovieCard;