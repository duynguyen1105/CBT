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
    title: {
      fontSize: 16,
      fontWeight: 600,
      color: "#333333",
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
  })
);
