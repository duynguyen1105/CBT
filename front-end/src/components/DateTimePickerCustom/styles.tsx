import { createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles(() =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      "& >p": {
        fontSize: 14,
        fontWeight: 600,
        color: "#333333",
        marginRight: 10,
      },
    },
    datePicker: {
      border: "1px solid #BDBDBD",
      borderRadius: 5,
      padding: "0px 10px 0px 10px",
      "& .MuiInputBase-root": {
        display: "flex",
        justifyContent: "space-between",
      },

      "& .MuiIconButton-root": {
        padding: "0",
        borderRadius: "unset",
      },
      "& .MuiInputAdornment-positionEnd": {
        paddingRight: 0,
      },
    },
    inputDatePicker: {
      height: 40,
      maxWidth: 200,
      fontSize: 14,
      fontWeight: 600,
      color: "#333333",
      padding: 0,
    },
    disabled: {
      background: "#F1F1F1",
      borderColor: "#BDBDBD",
    },
    textError: {
      color: "red",
      fontSize: 14,
      padding: "5px 0px",
      whiteSpace: "initial",
    },
  })
);

// // export default useStyles;

