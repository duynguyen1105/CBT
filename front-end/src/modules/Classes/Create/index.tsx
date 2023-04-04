import {
  AppBar,
  Avatar,
  Box,
  Grid,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import BreadcrumbsCustom from "components/BreadcrumbsCustom";
import Buttons from "components/Buttons";
import ButtonsOutline from "components/ButtonsOutline";
import images from "config/images";
import { FC, useState } from "react";
import Content from "./Content";
import Member from "./Member";
import Setting from "./Setting";
import useStyles from "./styles";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{ width: "100%" }}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const CreateClass: FC = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid container>
      <Grid container className={classes.container}>
        <Grid item md={12} className={classes.header}>
          <BreadcrumbsCustom
            name="My Classes"
            icon={images.CBTicStackRed}
            link2="New classes"
          />
          <div className={classes.avatar}>
            <p>Hi! Julia</p>
            <Avatar />
          </div>
        </Grid>

        <AppBar style={{ boxShadow: "none" }} position="static">
          <Tabs value={value} onChange={handleChange} className={classes.tabs}>
            <Tab label="Setting" {...a11yProps(0)} />
            <Tab label="Member" {...a11yProps(1)} />
            <Tab label="Content" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Grid className={classes.tabWrap} item md={12}>
            <Setting />
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grid className={classes.tabWrap} item md={12}>
            <Member />
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Grid className={classes.tabWrap} item md={12}>
            <Content />
          </Grid>

          <Box style={{ display: "flex", justifyContent: "space-between" }}>
            <ButtonsOutline
              onClick={() => {}}
              children="Cancel"
              placementIcon
            />
            <Buttons
              children="Create class"
              icon={images.CBTicPlusCircle}
              onClick={() => {}}
              placementIcon
            />
          </Box>
        </TabPanel>
      </Grid>
    </Grid>
  );
};

export default CreateClass;
