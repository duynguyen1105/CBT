import { Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControlLabel, Grid, IconButton, Typography } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import images from "config/images";
import { useState } from "react";
import Column from "./Column";
import useStyles from "./styles";

interface SingleSectionProps {
  page: number;
  index: number;
}

const SingleSection = (props: SingleSectionProps) => {
  // const { page, index } = props
  const classes = useStyles();
  const [shuffleQuestion, setShuffleQuestion] = useState(false);

  const handleDelete = (e) => {
    e.stopPropagation();
    console.log("Delete SingleSection");
  };

  const handleChangeShuffleQuestion = () => {
    setShuffleQuestion(!shuffleQuestion);
  };

  return (
    <div className={classes.container}>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Grid container>
            <Typography className={classes.questionNum}>1</Typography>
            <Typography className={classes.heading}>Section</Typography>
          </Grid>
          <Grid className={classes.headerRight}>
            <FormControlLabel
              onClick={(e) => e.stopPropagation()}
              control={<Checkbox color="primary" checked={shuffleQuestion} onChange={handleChangeShuffleQuestion} name="shuffle" />}
              label="Shuffle Question"
            />
            <IconButton onClick={handleDelete} size="small" children={<img src={images.CBTicTrashRed} alt="" />} />
          </Grid>
        </AccordionSummary>
        <AccordionDetails className={classes.generalContent}>
          <Column />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default SingleSection;

