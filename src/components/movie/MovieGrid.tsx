import Button from "./button/button";
import Movies from "./movie";
import "./movie.css";
import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";


//SKRIV OM TILL REM ISTÄLLET FÖR PX "2rem"
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            display: "flex",
            flexWrap: "wrap",
        },
        paper: {
            height: 400,
            minWidth: 500,
            background: "gray",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            border: "solid",
        },
        control: {
            padding: theme.spacing(3),
        },
        movieContainer: {
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            background: "blue",
            justifyContent: "center",
            paddingRight: 20,
            maxWidth: 1500
        },
        image: { width: "200px" },
        movieBox: {
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            background: "gray",
            width: 450,
            marginTop: 20,
            marginLeft: 20,
            // marginRight: 20,
        },
        outerDiv: {
            background: "yellow",
            display: "flex",
            justifyContent: "center",
        },
    })
);

export default function SpacingGrid() {

    const classes = useStyles();

    return (
        <div className={classes.outerDiv}>
            <div className={classes.movieContainer}>
                {Movies.map((movie) => (
                    <div className={classes.movieBox} key={movie.id}>
                        <img
                            className={classes.image}
                            src={movie.imageUrl}
                            alt=""
                        />
                        <p>{movie.price}</p>
                        <p>{movie.title}</p>
                        <Button
                            onClick={() => alert("Lades i korgen")}
                        ></Button>
                    </div>
                ))}
            </div>
        </div> 
    );
}
