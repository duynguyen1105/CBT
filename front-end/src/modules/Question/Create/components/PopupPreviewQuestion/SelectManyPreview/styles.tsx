import { createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles(() =>
  createStyles({
   
    title: {
      fontSize: 16,
      fontWeight: 600,
      color: "#333333",
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
      "& .MuiAlert-root": {
        padding: "0px 10px",
      },
      "& .MuiAlert-icon": {
        padding: "20px 0px",
      },
    },
  })
);
