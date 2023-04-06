import { yupResolver } from "@hookform/resolvers/yup";
import { Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Typography } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DateTimePickerCustom from "components/DateTimePickerCustom";
import Inputs from "components/Inputs";
import InputsRichtext from "components/InputsRichtext";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { AfterSubmitTestOptionDefault, AfterTestClosedOptionDefault, WhenDoingTestOptionDefault } from "./models";
import { Option, SettingTabFormValues, SettingTabFormValuesSchema } from "./schema";
import useStyles from "./styles";
import Buttons from "components/Buttons";

const scoreMethodOptions: Option[] = [
  { value: "highestScore", label: "Highest Score" },
  { value: "lastTime", label: "Last Time" },
  { value: "averageScore", label: "Average Score" },
];

const SettingTab = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState<string[]>(["general", "time", "score", "displayOptions", "security"]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<SettingTabFormValues>({
    resolver: yupResolver(SettingTabFormValuesSchema),
  });

  const onSubmit = (data: SettingTabFormValues) => {
    console.log(data);
  };

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    const newExpanded = isExpanded ? [...expanded, panel] : expanded.filter((e) => e !== panel);
    setExpanded(newExpanded);
  };

  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Accordion expanded={expanded.includes("general")} onChange={handleChange("general")}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="generalbh-content" id="generalbh-header">
            <Typography className={classes.heading}>General</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.generalContent}>
            <Inputs errorMessage={errors?.title?.message} title="Title" placeholder="Enter Test title here..." {...register("title")} />
            <Controller
              name="description"
              control={control}
              defaultValue=""
              render={({ field }) => <InputsRichtext name="description" className="description" title="Description" value={field.value} onChange={field.onChange} />}
            />
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded.includes("time")} onChange={handleChange("time")}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="timebh-content" id="timebh-header">
            <Typography className={classes.heading}>Time</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.timeContent}>
            <div className={classes.timeContainer}>
              <p>Schedule &nbsp;&nbsp;&nbsp;: </p>
              <Controller
                name="startAt"
                control={control}
                render={({ field }) => <DateTimePickerCustom {...field} label="Start at:" placeholder="Start time" errorMessage={errors?.startAt?.message} />}
              />
              <Controller
                name="finishAt"
                control={control}
                render={({ field }) => <DateTimePickerCustom {...field} label="Finish at:" placeholder="Finish time" errorMessage={errors?.finishAt?.message} />}
              />
            </div>
            <div className={classes.timeLimit}>
              <p>Time Limit</p>
              <Inputs fullwidth={false} className={classes.smallInput} {...register("timeLimit")} errorMessage={errors?.timeLimit?.message} />
              <p>Minutes</p>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded.includes("score")} onChange={handleChange("score")}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="scorebh-content" id="scorebh-header">
            <Typography className={classes.heading}>Score</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className={classes.scoreContent}>
              <div className={classes.scoreRow}>
                <p>Maximum score :</p>
                <Inputs fullwidth={false} className={classes.smallInput} {...register("maxScore")} errorMessage={errors?.maxScore?.message} />
              </div>
              <div className={classes.scoreRow}>
                <p>Score method:</p>
                <Controller name="scoreMethod" control={control} render={({ field }) => <Select {...field} options={scoreMethodOptions} placeholder="Select an option" />} />
              </div>
              <div className={classes.scoreRow}>
                <p>Minimum score require :</p>
                <Inputs fullwidth={false} {...register("minScoreRequire")} errorMessage={errors?.minScoreRequire?.message} />
              </div>
              <div className={classes.scoreRow}>
                <p>Number of Submissions Limit :</p>
                <Inputs fullwidth={false} {...register("submissionLimit")} errorMessage={errors?.submissionLimit?.message} />
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded.includes("displayOptions")} onChange={handleChange("displayOptions")}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="displayOptionsbh-content" id="displayOptionsbh-header">
            <Typography className={classes.heading}>Display Options</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.questionContainer}>
            <FormControl component="fieldset" className={classes.formGroup}>
              <FormLabel component="p">When doing test</FormLabel>
              <FormGroup>
                {WhenDoingTestOptionDefault.map((option, index) => (
                  <Controller
                    key={index}
                    name={`whenDoingTestOptions[${index}].value`}
                    control={control}
                    defaultValue={option.value}
                    render={({ field: { onChange, value } }) => (
                      <FormControlLabel key={index} control={<Checkbox color="primary" checked={value} onChange={(e) => onChange(e.target.checked)} />} label={option.label} />
                    )}
                  />
                ))}
              </FormGroup>
            </FormControl>
            <FormControl component="fieldset" className={classes.formGroup}>
              <FormLabel component="p">After submit</FormLabel>
              <FormGroup>
                {AfterSubmitTestOptionDefault.map((option, index) => (
                  <Controller
                    key={index}
                    name={`afterSubmitTestOptions[${index}].value`}
                    control={control}
                    defaultValue={option.value}
                    render={({ field: { onChange, value } }) => (
                      <FormControlLabel key={index} control={<Checkbox color="primary" checked={value} onChange={(e) => onChange(e.target.checked)} />} label={option.label} />
                    )}
                  />
                ))}
              </FormGroup>
            </FormControl>
            <FormControl component="fieldset" className={classes.formGroup}>
              <FormLabel component="p">After test closed</FormLabel>
              <FormGroup>
                {AfterTestClosedOptionDefault.map((option, index) => (
                  <Controller
                    key={index}
                    name={`afterTestClosedOptions[${index}].value`}
                    control={control}
                    defaultValue={option.value}
                    render={({ field: { onChange, value } }) => (
                      <FormControlLabel key={index} control={<Checkbox color="primary" checked={value} onChange={(e) => onChange(e.target.checked)} />} label={option.label} />
                    )}
                  />
                ))}
              </FormGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded.includes("security")} onChange={handleChange("security")}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="securitybh-content" id="securitybh-header">
            <Typography className={classes.heading}>Security</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className={classes.passWordRow}>
              <p>Password&nbsp;:</p>
              <Inputs showEyes autoComplete="new-password" type="password" fullwidth={false} {...register("password")} errorMessage={errors?.password?.message} />
            </div>
          </AccordionDetails>
        </Accordion>
        <Buttons type="submit">Save As Draft</Buttons>
      </form>
    </div>
  );
};

export default SettingTab;

