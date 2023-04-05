import {
  Avatar, Grid, Step, StepLabel, Stepper, Typography
} from "@material-ui/core";
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import SettingsIcon from '@material-ui/icons/Settings';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import clsx from 'clsx';
import BreadcrumbsCustom from "components/BreadcrumbsCustom";
import Buttons from "components/Buttons";
import Images from "config/images";
import PropTypes from 'prop-types';
import { useState } from "react";
import ContentTab from "./ContentTab";
import SettingTab from "./SettingTab";
import useStyles, { ColorlibConnector, useColorlibStepIconStyles } from "./styles";

const ColorlibStepIcon = (props) => {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <SettingsIcon />,
    2: <VideoLabelIcon />,
    3: <GroupAddIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};


const getSteps = () => {
  return ['Setting', 'Create content', 'Add people'];
}

const getStepContent = (step) => {
  switch (step) {
    case 0:
      return <SettingTab />;
    case 1:
      return <ContentTab />;
    case 2:
      return 'What is an ad group anyways?';
    default:
      return 'Unknown step';
  }
}

const CreateTest = () => {
  const classes = useStyles()
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Grid container className={classes.container}>
      <Grid item md={12} className={classes.header}>
        <BreadcrumbsCustom
          name="Test Bank"
          icon={Images.CBTicStackRed}
          link1="Test"
          link2="Create"
        />
        <div className={classes.avatar}>
          <p>Hi! Julia Falling on you</p>
          <Avatar />
        </div>
      </Grid>
      <Grid item md={12}>
        <div>
          <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div>
            {activeStep === steps.length ? (
              <div>
                <Typography>
                  All steps completed - you&apos;re finished
                </Typography>
                <Buttons
                  onClick={handleReset}
                  children="Reset"
                  icon={Images.CBTicRefresh}
                  placementIcon
                />
              </div>
            ) : (
              <div>
                <Typography>{getStepContent(activeStep)}</Typography>
                <div className={classes.groupBtn}>
                  <Buttons
                    children="Back"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    icon={Images.CBTicArrowLeft}
                  />
                  <Buttons
                    onClick={handleNext}
                    children={activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    icon={activeStep === steps.length - 1 ? Images.CBTicCheckWhite : Images.CBTicArrowRight}
                    placementIcon
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </Grid>
    </Grid>
  )
};

export default CreateTest