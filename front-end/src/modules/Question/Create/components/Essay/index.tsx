import { Grid } from "@material-ui/core";
import CategoriesSelect from "components/CustomSelect";
import Inputs from "components/Inputs";
import InputsRichtext from "components/InputsRichtext";
import useStyles from "./styles";

const Essay = () => {
  const classes = useStyles();
  const categoryOptions = [
    { value: "ielts", label: "IELTS" },
    { value: "toeic", label: "TOEIC" },
    { value: "general", label: "General" },
  ];

  return (
    <Grid container className={classes.container}>
      <Grid item md={9}>
        <Inputs name="title" title="Question Title" placeholder="Insert question title here..." />
      </Grid>
      <Grid item md={3}>
        <CategoriesSelect name="category" label="Category" options={categoryOptions} placeholder="Category" onChange={() => {}} />
      </Grid>
      <Grid item md={12}>
        <InputsRichtext className="question-content" onChange={() => {}} name="content" title="Question Content" value={""} />
      </Grid>
      <Grid item md={12}>
        <InputsRichtext className="answer-content" onChange={() => {}} name="answer" title="Answer Content" value={""} />
      </Grid>
      <Grid item md={12}>
        <InputsRichtext className="guide" onChange={() => {}} name="gradingGuide" title="Grading Guide" value={""} />
      </Grid>
    </Grid>
  );
};

export default Essay;
