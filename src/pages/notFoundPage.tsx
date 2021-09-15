import {
      createStyles,
      Grid,
      makeStyles,
      Paper,
      Theme
} from "@material-ui/core";
import { Link } from "react-router-dom";
    
    const useStyles = makeStyles((theme: Theme) =>
      createStyles({
        paper: {
          padding: theme.spacing(2),
          margin: "auto",
          marginTop: 0,
          marginBottom: "0.2rem",
          marginRight: "0.2rem",
        },
        link: {
            textDecoration: "none",
            color: "inherit",
          },
      })
    );
    
    const NotFoundPage = () => {
      const classes = useStyles();

        return (
          <Grid container spacing={0} justifyContent="center">
            <Grid item xs={9} sm={8} md={5}>
              <Paper className={classes.paper}>
              <div>
                        <h4>Sidan hittades inte</h4>
                         <Link className={classes.link} to="/">
                         <p>Gå tillbaka till startsidan</p>
                        </Link>
                   </div>
              </Paper>
            </Grid>
          </Grid>
        );
      }    
    export default NotFoundPage;
