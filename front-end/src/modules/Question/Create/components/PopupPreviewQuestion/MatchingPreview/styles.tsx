import { createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles(() =>
  createStyles({
    container: {
      minWidth: 800,
      minHeight: 300,
      padding: 20,
    },
    title: {
      fontSize: 16,
      fontWeight: 600,
      color: "#333333",
    },
    questionNum: {
      margin: 0,
      fontSize: 18,
      fontWeight: 700,
    },
    answers: {
      display: "flex",
      paddingLeft: 20,
      "& .MuiTypography-body1": {
        fontSize: 16,
        fontWeight: 500,
      },
    },
    feedback: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      "& > span": {
        borderRadius: 5,
        margin: 5,
        padding: 5,
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        display: "inline-flex",
        overflowWrap: "anywhere",
      },
      "& > div": {
        marginLeft: 10,
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
