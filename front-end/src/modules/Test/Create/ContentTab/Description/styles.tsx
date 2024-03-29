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
        justifyContent: "space-between",
      },
      "& .MuiAccordionDetails-root": {
        paddingTop: 0,
      },
    },
    headerRight: {
      display: "inline-flex",
    },
    heading: {
      marginLeft: 10,
      fontSize: 16,

      fontWeight: 600,
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

