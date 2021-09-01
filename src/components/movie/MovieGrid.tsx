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

// const useStyles = makeStyles((theme: Theme) =>
//     createStyles({
//         root: {
//             flexGrow: 1,
//             display: "flex",
//             flexWrap: "wrap"
//         },
//         paper: {
//             height: 400,
//             minWidth: 500,
//             background: "gray",
//             display: "flex",
//             justifyContent: "center",
//             flexDirection: "column",
//             alignItems: "center",
//         },
//         control: {
//             padding: theme.spacing(3),
//         },
//         image: { width: "100px" },
//         wrapShit: {
//             display: "flex",
//             flexWrap: "wrap"
//         },
//     })
// );

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
    // //Ändra space mellan boxar
    // const [spacing, setSpacing] = React.useState<GridSpacing>(2);
    const classes = useStyles();

    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setSpacing(
    //         Number((event.target as HTMLInputElement).value) as GridSpacing
    //     );
    // };

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
        // <Grid container className={classes.root} spacing={2}>
        //     <Grid item xs={12}>
        //         <Grid container justifyContent="center" spacing={spacing}>
        //             {Movies.map((movie) => (
        //                 <Grid
        //                     className={classes.wrapShit}
        //                     key={movie.id}
        //                     item
        //                     xs={4}
        //                 >
        //                     <Paper className={classes.paper}>
        //                         <img
        //                             className={classes.image}
        //                             src={movie.imageUrl}
        //                             alt=""
        //                         />
        //                         <p>{movie.price}</p>
        //                         <p>{movie.title}</p>
        //                         <Button
        //                             onClick={() => alert("Lades i korgen")}
        //                         ></Button>
        //                     </Paper>
        //                 </Grid>
        //             ))}
        //         </Grid>
        //     </Grid>
        // </Grid>
    );
}
