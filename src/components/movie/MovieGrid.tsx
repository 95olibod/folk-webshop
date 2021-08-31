import Button from "./button/Button";
import Movies from "./Movie";
import "./Movie.css";
import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid, { GridSpacing } from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

// const DisplayMovies = () => {
//     return (
//         <div className="flex">
//             {Movies.map((movie) => (
//                 <div className="flex col" key={movie.id}>
//                     <img src={movie.imageUrl} alt="" width="80px" />
//                     <p>{movie.title}</p>
//                     <p>{movie.price}</p>
//                     <Button onClick={() => alert("Lades i korgen")}></Button>
//                 </div>
//             ))}
//         </div>
//     );
// };

//export default DisplayMovies;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            height: 300,
            width: 300,
        },
        control: {
            padding: theme.spacing(3),
        },
    })
);

export default function SpacingGrid() {
    const [spacing, setSpacing] = React.useState<GridSpacing>(2);
    const classes = useStyles();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSpacing(
            Number((event.target as HTMLInputElement).value) as GridSpacing
        );
    };

    return (
        <Grid container className={classes.root} spacing={3}>
            <Grid item xs={12}>
                <Grid
                    container
                    justifyContent="center"
                    direction="row"
                    spacing={spacing}
                >
                    {Movies.map((movie) => (
                        <Grid key={movie.id} item>
                            <Paper className={classes.paper}>
                                <img src={movie.imageUrl} alt="" width="80px" />
                                <p>{movie.price}</p>
                                {movie.title}
                                <Button
                                    onClick={() => alert("Lades i korgen")}
                                ></Button>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
}
