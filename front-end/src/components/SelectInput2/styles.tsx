import { createStyles, makeStyles } from '@material-ui/core/styles';
import theme from 'config/theme';
export default makeStyles(() =>
  createStyles({
    container: {
      width: "100%",
      height: "40px",
      marginBottom: '5%',
      position: 'relative',
      '& .MuiSelect-selectMenu': {
        color: '#666666',
        fontSize: 14,
        fontFamily: 'Arial Rounded MT !important',
        letterSpacing: 1,
        fontWeight: 500,
        paddingLeft: '24px !important',
      },
    },
    textTitle: {
      lineHeight: '17px',
      color: theme.subColor,
      fontSize: 14,
      paddingBottom: 9,
      fontWeight: 500,
    },
    option: {
      fontFamily: 'Arial Rounded MT !important',
      letterSpacing: 1,
      fontSize: 14,
      fontWeight: 700,
      color: '#333333 !important',
      paddingLeft: 24,
      minHeight: 37
    },
    customSelectRoot: {
      '&:before, &.Mui-disabled:before': {
        border: 'none'
      },
      '&:hover:before, &.Mui-focused:after': {
        borderBottom: 'none !important',
      },
      '& img.MuiSelect-icon': {
        marginRight: 7
      },
    },
    customSelect: {
      border: '1px solid #304D95',
      padding: '14px 16px',
      borderRadius: '50px !important',
    },
    textError: {
      color: 'red',
      fontSize: 14,
      padding: '5px 0px',
      whiteSpace: 'initial'
    },
    inputInvalid: {
      border: '2px solid #FD5A65 !important',
      background: '#FFD1D1 !important',
    }
  }),
  {
    name: 'SelectInput2',
    index: 1,
  }
);
// export default useStyles;
