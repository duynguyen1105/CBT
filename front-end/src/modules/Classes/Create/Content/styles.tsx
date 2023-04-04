import { createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles(() =>
  createStyles({
    btnWrap: {
      width: "100%",
      display: "flex",
      gap: 40,
      justifyContent: "end",
    },

    btnAdd: {
      height: "20px",
      width: "32px",
      fontSize: "12px !important",
      marginRight: 50,
      "& .MuiButton-label": {
        "& .MuiButton-endIcon": {
          width: "16px",
          height: "16px",
        },
      },
    },

    contentList: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      alignItems: "center",
      marginTop: 30,
    },
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
      backgroundColor: "green",
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
