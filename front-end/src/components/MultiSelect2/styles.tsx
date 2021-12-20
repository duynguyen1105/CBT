import { createStyles, makeStyles } from '@material-ui/core/styles';
import theme from 'config/theme';
export default makeStyles(() =>
  createStyles({
    container: {
      // zIndex: 999,
      width: "100%",
      height: "40px",
      marginBottom: '5%',
      position: 'relative',
    },
    root: {
      top: 25,
      border: '1px solid #304D95',
      position: 'absolute',
      boxShadow: 'none !important',
      padding: 0,
      borderRadius: '24px !important',
      '&:before': {
        backgroundColor: 'unset',
      },
      '&.Mui-expanded': {
        margin: '0px',
      },
      '& .MuiAccordionDetails-root': {
        display: 'flex',
        flexDirection: 'column',
        padding: 0,
      },
      '& .MuiAccordionSummary-root': {
        maxHeight: 48,
      },
      '& .MuiAccordionSummary-root.Mui-expanded': {
        minHeight: 'unset'
      },
      '& .MuiMenuItem-root': {
        // fontFamily: 'Arial Rounded MT !important',
        fontWeight: 500,
        letterSpacing: 1,
        fontSize: 14,
      },
      '& .MuiAccordionSummary-content.Mui-expanded': {
        marginLeft: -8
      },
      '& .MuiAccordionSummary-content': {
        marginLeft: -8
      },
      '& .MuiAccordionSummary-expandIcon.Mui-expanded': {
        transform: 'rotate(90deg)',
      },
      '& .MuiIconButton-edgeEnd': {
        marginRight: 'unset'
      },
      '& .MuiListItem-root': {
        '&:last-child': {
          borderBottomLeftRadius: '26px !important',
          borderBottomRightRadius: '26px !important'
        }
      },
      '& .MuiAccordion-root.Mui-disabled': {
        color: '#333333 !important'
      },
    },
    textTitle: {
      lineHeight: '17px',
      color: theme.subColor,
      fontSize: 14,
      paddingBottom: 9,
      fontWeight: 500,
    },
    disabledText: {

    },
    option: {
      fontFamily: 'Arial Rounded MT !important',
      letterSpacing: 1,
      fontSize: 14,
      fontWeight: 500,
      color: '#333333 !important',
      paddingLeft: 24,
      minHeight: 37
    },
    selected: {
      background: 'none !important',
      borderTopLeftRadius: '26px !important',
      borderTopRightRadius: '26px !important'
    },
    borderTop: {
      borderTop: '2px solid #304D95'
    },
    customSelectRoot: {
      '&:before, &.Mui-disabled:before': {
        border: 'none'
      },
      '&:hover:before, &.Mui-focused:after': {
        borderBottom: 'none !important',
      },
      '& img.MuiSelect-icon': {
        marginRight: '16px'
      }
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