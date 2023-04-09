import { Grid } from "@material-ui/core";
import Page from "./Page";
import useStyles from "./styles";

const ContentTab = () => {
  const classes = useStyles();

  return (
    <Grid container direction="row" spacing={2} className={classes.container}>
      <Grid item md={10} className={classes.content}>
        <Page pageNumber={1} />
      </Grid>
      <Grid item md={2} className={classes.map}>
        Test Map
      </Grid>
    </Grid>
  );
};

export default ContentTab;

