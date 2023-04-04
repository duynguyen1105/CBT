import { Avatar, Box, Button, Grid, Typography } from "@material-ui/core";
import BreadcrumbsCustom from "components/BreadcrumbsCustom";
import images from "config/images";
import { FC } from "react";
import { useHistory, useLocation } from "react-router-dom";
import useStyle from "./styles";

const BeginTest: FC = () => {
  const classes = useStyle();
  const history = useHistory();
  const location = useLocation();
  const onStartTest = () => {
    history.push(`${location.pathname}/listening-test`);
  };

  return (
    <Grid container>
      <Grid container className={classes.container}>
        <Grid item md={12} className={classes.header}>
          <div className={classes.avatar}>
            <p>Hi! Julia</p>
            <Avatar />
          </div>
        </Grid>

        <Grid item md={12}>
          <BreadcrumbsCustom
            name="My Test"
            icon={images.CBTicStackRed}
            link1="List"
            link2="Ielts"
            link3="GT Writing Test - Informal Letters"
          />
        </Grid>

        <Grid item md={12} className={classes.layout}>
          <Box className={classes.title}>
            <Typography style={{ padding: 14, fontSize: 20, fontWeight: 600 }}>
              GT Writing Test - Informal Letters
            </Typography>
          </Box>

          <Box style={{ color: "#999", padding: 40 }}>
            <p style={{ fontWeight: 600 }}>
              You should spend about 120 minutes on this test.
            </p>
            <p style={{ fontWeight: 600 }}>
              The graphs below show the enrolments of overseas students and
              local students in Australia universities over a ten year period
            </p>
            <p style={{ fontWeight: 600 }}>
              Summaries the information by selecting and reporting the main
              features, and make comparisons where relevant
            </p>
            <p style={{ fontWeight: 600 }}>
              You should write at least 150 words
            </p>
          </Box>

          <Box className={classes.role}>
            <Typography style={{ fontWeight: 600 }}>
              Number of time to do: 2
            </Typography>
            <Typography style={{ fontWeight: 600 }}>
              This test will finish at Satuday, 27 November 2021, 11:00 AM
            </Typography>
            <Typography style={{ fontWeight: 600, marginBottom: 12 }}>
              Score method: Lasttime
            </Typography>

            <Button
              style={{ textTransform: "capitalize", fontWeight: 600 }}
              color="primary"
              variant="contained"
              onClick={onStartTest}
            >
              Begin The Test
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BeginTest;
