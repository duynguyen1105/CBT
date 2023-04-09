import { createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles(() =>
  createStyles({
    container: {
      margin: "10px 0",
      background: "#FAFAFA",
      width: "100%",
      "& .MuiAccordionSummary-content": {
        margin: 0,
        alignItems: "center",
      },
      "& .MuiAccordionDetails-root": {
        paddingTop: 0,
      },
      "& .MuiFormControlLabel-root": {
        marginRight: 5,
        whiteSpace: "nowrap",
      },
    },
    heading: {
      marginLeft: 10,
      fontSize: 16,
      flexBasis: "72%",
      flexShrink: 10,
      fontWeight: 600,
    },
    headerRight: {
      display: "inline-flex",
    },
    scoreInput: {
      borderRadius: 5,
      border: "1px solid #BDBDBD",
      background: "#FAFAFA",
      margin: "0px 20px 3px 10px",
      maxWidth: 50,
      fontSize: 14,
      fontWeight: 700,
      padding: 3,
      textAlign: "center",
    },
    generalContent: {
      display: "flex",
      flexDirection: "column",
      marginLeft: 20,
    },
    questionNum: {
      minWidth: 20,
      height: 20,
      margin: 0,
      textAlign: "center",
      fontSize: 14,
      color: "#FFFFFF",
      borderRadius: "50%",
      background: "#32B3C7",
    },
  })
);

