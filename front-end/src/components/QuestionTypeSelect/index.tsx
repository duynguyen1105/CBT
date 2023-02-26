import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { TypeQuestionValue } from "models/question";
import { Fragment } from "react";
import { navs } from "./models";
import useStyles from "./styles";

interface QuestionTypeSelectProps {
  onChange: Function;
  type: TypeQuestionValue;
}

const QuestionTypeSelect = (props: QuestionTypeSelectProps) => {
  const { onChange, type } = props;
  const classes = useStyles();

  const getMenus = () => {
    let _menuItems = [...navs];
    return _menuItems;
  };

  const handleChangeType = (value: TypeQuestionValue) => () => {
    onChange(value);
  };
  return (
    <div className={classes.container}>
      <p>Question Type</p>
      <div className={classes.list}>
        <List>
          {getMenus().map((route, i) => (
            <Fragment key={i}>
              <ListItem className={classes.listWrap} selected={type === route.value} onClick={handleChangeType(route.value)}>
                <ListItemIcon>{route.icon}</ListItemIcon>
                <ListItemText primary={route.title} />
              </ListItem>
            </Fragment>
          ))}
        </List>
      </div>
    </div>
  );
};

export default QuestionTypeSelect;
