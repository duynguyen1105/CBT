import { createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles(() =>
  createStyles({
    container: {
      //background: '#FAFAFA',
      '& .MuiList-padding': {
        padding: 0
      },
    },
    list: {
      '& .MuiListItemIcon-root': {
        minWidth: 40
      }
    },
    nestedList: {
      '& .MuiListItem-gutters': {
        paddingLeft: 30
      }
    }
  }))