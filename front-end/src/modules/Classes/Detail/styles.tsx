import { createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles(() =>
  createStyles({
    container: {
      display: "flex",
      justifyContent: "space-between",
    },
    header: {
      display: "flex",
      marginBottom: 10,
      justifyContent: "space-between",
      alignItems: "flex-start",
      "& >div:first-child": {
        width: "100%",
      },
    },
    avatar: {
      marginLeft: 10,
      width: 150,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-end",
      "& > p": {
        marginRight: 5,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      },
    },
  })
);
