import { createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles(() =>
  createStyles({
    contentList: {},
    contentItem: {
      width: "80%",
      height: "20px",
      display: "flex",
      alignItems: "center",
      marginBottom: 12,
    },
    contentData: {
      border: "1px solid #999",
      height: "20px",
      marginLeft: 20,
      width: "100%",
      borderRadius: 3,
      display: "flex",
    },
    tag: {
      width: 80,
      height: "100%",
      display: "flex",
      alignItems: "center",
      gap: 10,
      color: "#fff",
      borderRadius: "0 0 6 6 ",
      marginRight: 10,
      flex: 1,
    },
    icon: {
      width: "20px",
      height: "100%",
      backgroundColor: "green",
    },
    contentAction: {
      display: "flex",
      alignItems: "center",
      flex: 1,
      justifyContent: "end",
    },
  })
);
