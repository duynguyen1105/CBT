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
    tabWrap: {
      width: "100%",
      backgroundColor: "#fff",
      borderRadius: 5,
      marginBottom: 20,
    },
    tabs: {
      backgroundColor: "#fff",
      color: "#000",
      borderBottom: "1px solid #999",
      borderRadius: "5 5 0 0 ",

      "& .MuiTabs-scroller": {
        alignSelf: "flex-end",
        "& .MuiTabs-flexContainer": {
          paddingLeft: 20,

          "& .Mui-selected": {
            border: "1px solid #999",
            borderBottom: "none",
            backgroundColor: "#f6f6f6",
          },
          "& .MuiTab-root": {
            minWidth: "100px",
            minHeight: "32px",
            padding: 4,

            "& .MuiTab-wrapper": {
              textTransform: "capitalize",
            },
          },
        },
        "& .PrivateTabIndicator-colorSecondary-34": {
          backgroundColor: "transparent !important",
        },
      },
    },
  })
);
