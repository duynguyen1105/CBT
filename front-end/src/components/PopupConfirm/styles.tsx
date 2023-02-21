import { createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles(() =>
  createStyles({
    container: {
      "& > div > div": {
        borderRadius: 10,
      },
    },
    containerDialog: {
      padding: "40px",
    },
    containerContent: {
      display: "grid",
      textAlign: "center",
      "& >div:nth-child(2)": {
        padding: 0,
        "&>h2": {
          fontSize: 30,
          textAlign: "center",
          color: "#304D95",
          fontWeight: "bold",
        },
      },
      "& >div:nth-child(3)": {
        "&>p": {
          fontSize: 18,
          textAlign: "center",
          color: "#304D95",
          fontWeight: 300,
        },
      },
    },
    containerButton: {
      "& button": {
        color: "#000000",
        fontWeight: "bold",
        padding: "15px 80px",
        textTransform: "capitalize",
        borderRadius: "28px",
        marginRight: 7,
        width: "208px",
        height: "46px",
        "&:hover": {
          borderRadius: 40,
        },
        "& span": {
          fontSize: 14,
        },
      },
    },
  })
);

// export default useStyles;
