import { createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles(
  () =>
    createStyles({
      container: {
        //marginBottom: 10,
      },
      textTitle: {
        lineHeight: "17px",
        color: "#333333",
        fontSize: 14,
        paddingBottom: 9,
        fontWeight: 700,
        whiteSpace: "nowrap",
      },
      textError: {
        color: "red",
        fontSize: 14,
        padding: "5px 0px",
        whiteSpace: "initial",
      },
      fullWidth: {
        width: "100%",
      },
      rootTextField: {
        width: "100%",
        "& > div": {
          border: "1px solid #BDBDBD",
          background: "#FAFAFA",
          minHeight: 40,
          "& > .MuiInputBase-input:-webkit-autofill": {
            "-webkit-box-shadow": "0 0 0 30px white inset !important",
          },
          "& > div > button": {
            marginRight: 10,
            "& > span > img": {
              width: 24,
            },
          },
          "& > .MuiInputAdornment-positionStart": {
            marginRight: -9,
            "& > img": {
              marginLeft: 25,
              zIndex: 999,
            },
          },
          "& > .MuiInputAdornment-positionEnd": {
            marginLeft: -9,
            "& > img": {
              marginRight: 16,
            },
          },
        },
      },
      inputInvalid: {
        // '& > div': {
        //   border: '2px solid #FD5A65 !important',
        //   background: '#FFD1D1',
        // },
      },
      inputTextfield: {
        "&::placeholder": {
          opacity: 0.5,
          color: "#333333",
          fontSize: 14,
        },
        padding: "0px 10px",
        height: 40,
        fontSize: 14,
        fontWeight: 500,
        color: "#333333",
      },
      inputDisable: {
        "& > div": {
          border: "1px solid #BDBDBD !important",
          background: "#F6F6F6",
        },
      },
    }),
  {
    name: "Inputs",
    index: 1,
  }
);

// // export default useStyles;

