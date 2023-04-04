import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import BreadcrumbsCustom from "components/BreadcrumbsCustom";
import images from "config/images";
import { FC } from "react";
import Calendar from "./Calendar";
import ContentDetail from "./ContentDetail";
import useStyle from "./styles";

const DetailClasses: FC = () => {
  const classes = useStyle();
  return (
    <Grid container>
      <Grid container className={classes.container}>
        <Grid item md={12} className={classes.header}>
          <BreadcrumbsCustom
            name="My Classes"
            icon={images.CBTicStackRed}
            link2="IELTS Begin Level 1"
          />
          <div className={classes.avatar}>
            <p>Hi! Julia</p>
            <Avatar />
          </div>
        </Grid>

        <Grid item md={8}>
          <ContentDetail />
        </Grid>

        <Grid item md={4}>
          <Calendar />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DetailClasses;
