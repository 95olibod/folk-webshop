import MovieDetailCard from "../components/movie/cards/movieDetailCard";
import { MovieData, movies } from "../components/movie/movie";
import { RouteComponentProps } from "react-router-dom";
import "./styles/detailsPage.css"
import { Grid, Paper} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useContext, useState } from "react";
import { title } from "process";
import { MovieContext } from "../contexts/movieContext";

interface Props {
  movie: MovieData;
}

interface Props extends RouteComponentProps<{ id: string }> {}

//Finds movie which matches the one clicked 
const EditPage = ({ match }: Props) => {

      const { addNewMovie } = useContext(MovieContext);

      const useStyles = makeStyles((theme) => ({
            margin: {
              margin: theme.spacing(1),
            },
            paper: {
              padding: theme.spacing(2),
              margin: "auto",
              marginTop: 0,
              marginBottom: "0.2rem",
              marginRight: "0.2rem",
            },
          }));
          

  //Get id from url
  const id = parseInt(match.params.id);

  console.log(id)
  //Get the clicked movie by id
  const movieItem = movies.filter((movieItem) => movieItem.id === id);

  const classes = useStyles();


  let [formData, setFormData] = useState<MovieData>()

    
 
  const onSubmit = () => {
      addNewMovie(formData)
      console.log(formData)
    }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value })
    }


  return (
      <Grid item container xs={12}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h4>HEJ</h4>
            <form>
            <p>Movie titel</p>
            <input
            
        type='text'
       onChange={handleChange}
      />
            <p>Movie story</p>
            <input
        type='text'
       onChange={handleChange}
      />           
            <p>Release</p>
            <input
        type='text'
       onChange={handleChange}
      />
            <p>Movie story</p>
            <input
        type='text'
       onChange={handleChange}
      />           
            <p>Movie titel</p>
            <input
            
        type='text'
       onChange={handleChange}
      />
            <p>Movie story</p>
            <input
        type='text'
       onChange={handleChange}
      />           
            <p>Movie titel</p>
            <input
            
        type='text'
       onChange={handleChange}
      />
            <p>Movie story</p>
            <input
        type='text'
       onChange={handleChange}
      />           
       <input type="submit" value="Submit" onSubmit={onSubmit}/> 
            </form>
          </Paper>
              <Paper className={classes.paper}>
            </Paper>
        </Grid>
      </Grid>
    );
  };
export default EditPage;
