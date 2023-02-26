import { createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles(() =>
  createStyles({
    dialog: {
      "& .MuiGrid-spacing-xs-2": {
        margin: "unset",
        width: "unset",
      },
    },
  })
);
