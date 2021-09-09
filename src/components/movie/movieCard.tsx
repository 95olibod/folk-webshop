import Button from "./button/button";
import { MovieData } from "./movie";
import "./movie.css";
import { FC } from "react";
import { useContext } from "react";
import { MovieContext } from "../../contexts/movieContext";
import { Link } from "react-router-dom";
import { createStyles, makeStyles, Paper, Theme } from "@material-ui/core";

interface Props {
    movie: MovieData;
}

const MovieCard: FC<Props> = ({ movie }) => {
    const { toggleAddedMovies } = useContext(MovieContext);
    const url = `/details/${movie.id}`;


    const useStyles = makeStyles((theme: Theme) =>
        createStyles({            
            paper: {
                padding: theme.spacing(2),                
                margin: "0.5rem",
                maxWidth: 500,
            },
        })
    );
/*  */
const classes = useStyles();
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
            <p className="details-p">{movie.price} kr</p>
            <Button onClick={() => toggleAddedMovies(movie.id)}></Button>
        </div>
        </Paper>
    );
};

export default MovieCard;
