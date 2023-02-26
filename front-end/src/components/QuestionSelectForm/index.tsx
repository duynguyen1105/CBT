import { Grid } from "@material-ui/core";
import images from "config/images";
import Essay from "modules/Question/Create/components/Essay";
import { useState } from "react";
import Select, { components } from "react-select";
import useStyles, { customSelectStyle } from "./styles";

export interface CustomOption {
  readonly value: number;
  readonly label: string;
  readonly icon: string;
}

const questionTypeOption: CustomOption[] = [
  { value: 0, label: "Select One", icon: images.CBTicRecordBlack },
  { value: 1, label: "Select Many", icon: images.CBTicCheckBlack },
  { value: 2, label: "Matching", icon: images.CBTicShuffleBlack },
  { value: 3, label: "Dropdown - Select", icon: images.CBTicTableBlack },
  { value: 4, label: "Fill in the gaps", icon: images.CBTicRowsBlack },
  { value: 5, label: "Essay", icon: images.CBTicPencilBlack },
];

const { Option, SingleValue } = components;
const CustomSingleValue = (props) => {
  const classes = useStyles();
  return (
    <SingleValue {...props}>
      <div className={classes.option}>
        <img src={props.data.icon} alt={props.data.icon} style={{ width: 20, height: 20 }} />
        <p>{props.data.label}</p>
      </div>
    </SingleValue>
  );
};

const CustomOptions = (props) => {
  const classes = useStyles();
  return (
    <Option {...props}>
      <div className={classes.option}>
        <img src={props.data.icon} alt={props.data.icon} style={{ width: 24, height: 24 }} />
        <p>{props.data.label}</p>
      </div>
    </Option>
  );
};

const renderQuestion = (type: number) => {
  switch (type) {
    default:
      return null;
  }
};
const QuestionSelectForm = () => {
  const classes = useStyles();
  const [type, setType] = useState(0);

  const handleChangeQuestionType = (e) => {
    setType(e.value);
  };
  return (
    <Grid container className={classes.select}>
      <Select
        isClearable={false}
        hideSelectedOptions
        isSearchable={false}
        components={{
          IndicatorSeparator: null,
          Option: CustomOptions,
          SingleValue: CustomSingleValue,
        }}
        options={questionTypeOption}
        styles={customSelectStyle}
        onChange={handleChangeQuestionType}
        defaultValue={questionTypeOption[0]}
      />
      <div className={classes.questionContainer}>{renderQuestion(type)}</div>
    </Grid>
  );
};

export default QuestionSelectForm;
