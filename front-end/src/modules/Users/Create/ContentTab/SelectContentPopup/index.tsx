import { Dialog } from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ChromeReaderModeOutlinedIcon from '@material-ui/icons/ChromeReaderModeOutlined';
import CropDinOutlinedIcon from '@material-ui/icons/CropDinOutlined';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import FindInPageOutlinedIcon from '@material-ui/icons/FindInPageOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import { useState } from 'react';
import useStyles from './styles';
interface SelectContentPopupProps {
  open: boolean,
  onClose: Function
}

const SelectContentPopup = (props: SelectContentPopupProps) => {

  const { open, onClose } = props
  const classes = useStyles();
  const [openNested, setOpenNested] = useState(true);

  const handleClickExpand = () => {
    setOpenNested(!openNested);
  };

  const handleClickItem = () => {
    onClose()
  }
  return (
    <Dialog
      open={open}
      onClose={() => onClose()}
      className={classes.container}
    >
      <List
        component="nav"
        className={classes.list}
      >
        <ListItem button onClick={handleClickItem}>
          <ListItemIcon>
            <InfoOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Description" />
        </ListItem>
        <ListItem button onClick={handleClickItem}>
          <ListItemIcon>
            <HelpOutlineOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="A New Question" />
        </ListItem>
        <ListItem button onClick={handleClickItem}>
          <ListItemIcon>
            <FindInPageOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="A Question in Question Bank" />
        </ListItem>
        <ListItem button onClick={handleClickExpand}>
          <ListItemIcon >
            <LibraryBooksOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Section" />
          {openNested ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openNested} timeout="auto" unmountOnExit>
          <List component="div" disablePadding className={classes.nestedList}>
            <ListItem button onClick={handleClickItem}>
              <ListItemIcon>
                <CropDinOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Single Column" />
            </ListItem>
            <ListItem button onClick={handleClickItem}>
              <ListItemIcon>
                <ChromeReaderModeOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Double Column" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Dialog>
  );
}

export default SelectContentPopup
