import { Accordion, AccordionDetails, AccordionSummary, Grid, IconButton, Typography } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import InputsRichtext from "components/InputsRichtext";
import images from "config/images";
import useStyles from "./styles";

interface DescriptionProps {
  page: number;
  index: number;
}

const Description = (props: DescriptionProps) => {
  const { page, index } = props;
  const classes = useStyles();
  const handleDelete = (e) => {
    e.stopPropagation();
    console.log("Delete description");
  };
  return (
    <div className={classes.container}>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Grid container>
            <Typography className={classes.questionNum}>i</Typography>
            <Typography className={classes.heading}>Description</Typography>
          </Grid>
          <Grid className={classes.headerRight}>
            <IconButton onClick={handleDelete} size="small" children={<img src={images.CBTicTrashRed} alt="" />} />
          </Grid>
        </AccordionSummary>
        <AccordionDetails className={classes.generalContent}>
          <InputsRichtext className={`description-p${page}-${index}`} onChange={() => {}} name="description" value="" />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Description;

