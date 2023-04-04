import { createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles(() =>
  createStyles({
    numberQuestion: {
      width: 20,
      minHeight: 20,
      boxShadow: "none",
      height: 18,
      fontSize: 12,
      margin: "0 2px",
      lineHeight: 0,
      backgroundColor: "#34b4c7",
    },
    answer: {
      width: 20,
      minHeight: 20,
      boxShadow: "none",
      height: 18,
      fontSize: 12,
      margin: "0 2px",
      lineHeight: 0,
      backgroundColor: "#999",
      color: "#000",
      marginRight: 16,
    },
    answerWrap: {
      display: "flex",
      alignItems: "center",
      marginLeft: 20,

      "& .MuiFormControlLabel-root": {
        "& .Mui-checked": {
          color: "#34b4c7",
        },
      },
    },

    btn: {
      boxShadow: "none",
      marginLeft: 80,
      maxHeight: 26,
    },
    tableTrueFalse: {
      border: "1px solid #000",
      "& .MuiTableCell-root": {
        padding: 2,
        borderBottom: "1px solid #000",
      },
    },
    selectWrap: {
      display: "flex",
      alignItems: "center",
      margin: "2px 0",

      "& .MuiFormControlLabel-root": {
        "& .Mui-checked": {
          color: "#34b4c7",
        },
      },
    },
    inputChoiceAnswer: {
      maxWidth: 100,
      "& .MuiInputBase-root": {
        height: 22,
      },
    },
  })
);
