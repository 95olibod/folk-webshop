import { FC, MouseEventHandler } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

interface Props {
  onClick: MouseEventHandler<HTMLButtonElement>;
}


//Button component for edit movie item 
const EditMovieButton: FC<Props> = ({ onClick }) => {

    const useStyles = makeStyles((theme: Theme) =>
      createStyles({
        root: {
          '& > *': {
            margin: theme.spacing(1),
          },
        },
      }),
    );
    
    const classes = useStyles();

  return (
    <div className={classes.root}>
        <Button variant="contained" color="primary"  onClick={onClick}>
            Redigera
        </Button>
    </div>
  );
};

export default EditMovieButton;