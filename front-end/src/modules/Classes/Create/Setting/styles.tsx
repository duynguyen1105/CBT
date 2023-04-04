import { createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles(() =>
  createStyles({
    generalContent: {
      display: "flex",
      flexDirection: "column",
      marginLeft: 20,
      "& >div": {
        marginBottom: 20,
      },

      "& >p": {
        fontWeight: 700,
        fontSize: 15,
      },
    },
    timeContent: {
      display: "flex",
      flexDirection: "column",
      marginTop: -30,
    },
  })
);
