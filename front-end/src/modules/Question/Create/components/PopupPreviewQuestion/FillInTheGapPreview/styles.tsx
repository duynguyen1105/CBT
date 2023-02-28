import { createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles(() =>
  createStyles({
    inputAnswer: {
      margin: "0 10px",
      "& > div > input": {
        padding: "10px",
        width: "100px",
      },
    },
    container: {
      minWidth: 500,
      minHeight: 300,
      padding: 20,
    },
    title: {
      fontSize: 16,
      fontWeight: 600,
      color: "#333333",
    },
    questionNum: {
      margin: "20px 0 10px",
      fontSize: 18,
      fontWeight: 700,
    },
    answers: {
      display: "flex",
      flexWrap: "wrap",
      paddingLeft: 20,
      flexDirection: "column",
      "& .MuiTypography-body1": {
        fontSize: 16,
        fontWeight: 500,
      },
    },
    feedback: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      "& .MuiAlert-root": {
        padding: "0px 10px",
      },
      "& .MuiAlert-icon": {
        padding: "20px 0px",
      },
    },
    feedbackBtn: {
      cursor: "pointer",
      background: "#BDBDBD",
      fontSize: 14,
      width: 120,
      textAlign: "center",
      borderRadius: 5,
      padding: 3,
    },
  })
);
