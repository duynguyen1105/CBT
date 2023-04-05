import {
  Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Typography
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DateTimePickerCustom from 'components/DateTimePickerCustom';
import Inputs from 'components/Inputs';
import InputsRichtext from 'components/InputsRichtext';
import { useState } from 'react';
import Select from 'react-select';
import { AfterSubmitTestOptionDefault, AfterTestClosedOptionDefault, WhenDoingTestOptionDefault } from './models';
import useStyles, { customSelectStyle } from './styles';

const scoreMethodOptions = [
  { value: "highestScore", label: 'Highest Score' },
  { value: "lastTime", label: 'Last Time' },
  { value: "averageScore", label: 'Average Score' },
]

const SettingTab = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState<string | false>(false);

  const [whenDoingTestState, setWhenDoingTestState] = useState(WhenDoingTestOptionDefault);
  const [afterSubmitTestState, setAfterSubmitTestState] = useState(AfterSubmitTestOptionDefault);
  const [afterTestClosedState, setAfterTestClosedState] = useState(AfterTestClosedOptionDefault);

  const handleChangeDoingCheckbox = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const newlist = [...whenDoingTestState]
    newlist[index].value = event.target.checked
    setWhenDoingTestState(newlist);
  };
  const handleChangeSubmitCheckbox = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const newlist = [...afterSubmitTestState]
    newlist[index].value = event.target.checked
    setAfterSubmitTestState(newlist);
  };
  const handleChangeClosedCheckbox = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const newlist = [...afterTestClosedState]
    newlist[index].value = event.target.checked
    setAfterTestClosedState(newlist);
  };

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.container}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>General</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.generalContent}>
          <Inputs
            name="title"
            title='Title'
            placeholder='Enter Test title here...'
          />
          <InputsRichtext
            className='description'
            onChange={() => { }}
            name='description'
            title='Description'
            value=""
          />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Time</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.timeContent}>
          <div className={classes.timeContainer}>
            <p>Schedule &nbsp;&nbsp;&nbsp;: </p>
            <DateTimePickerCustom
              name="startTime"
              label="Start at:"
            />
            <DateTimePickerCustom
              name="endTime"
              label="Finish at:"
            />
          </div>
          <div className={classes.timeLimit}>
            <p>Time Limit&nbsp;:&emsp;&emsp;&emsp;&emsp;&nbsp;</p>
            <input placeholder='00' />
            <p>Hours</p>
            <input placeholder='00' />
            <p>Minutes</p>
            <input placeholder='00' />
            <p>Seconds</p>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Score</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className={classes.scoreContent}>
            <div className={classes.scoreRow}>
              <p>Maximum score &nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;:</p>
              <input placeholder='00' />
            </div>
            <div className={classes.scoreRow}>
              <p>Score method &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;:</p>
              <Select
                options={scoreMethodOptions}
                styles={customSelectStyle}
                defaultValue={scoreMethodOptions[0]}
              />
            </div>
            <div className={classes.scoreRow}>
              <p>Minimum score require  &emsp;&emsp;&emsp;:</p>
              <input placeholder='00' />
            </div>
            <div className={classes.scoreRow}>
              <p>Number of Submissions Limit&nbsp;:</p>
              <input placeholder='00' />
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Display Options</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.questionContainer}>
          <FormControl component="fieldset" className={classes.formGroup}>
            <FormLabel component="p">When doing test</FormLabel>
            <FormGroup>
              {
                whenDoingTestState.map((e, index) => (
                  <FormControlLabel
                    key={index}
                    control={<Checkbox
                      color='primary'
                      checked={e.value}
                      onChange={handleChangeDoingCheckbox(index)}
                      name={e.label} />}
                    label={e.label}
                  />
                ))
              }
            </FormGroup>
          </FormControl>
          <FormControl component="fieldset" className={classes.formGroup}>
            <FormLabel component="p">After submit</FormLabel>
            <FormGroup>
              {
                afterSubmitTestState.map((e, index) => (
                  <FormControlLabel
                    key={index}
                    control={<Checkbox
                      color='primary'
                      checked={e.value}
                      onChange={handleChangeSubmitCheckbox(index)}
                      name={e.label} />}
                    label={e.label}
                  />
                ))
              }
            </FormGroup>
          </FormControl>
          <FormControl component="fieldset" className={classes.formGroup}>
            <FormLabel component="p">After test closed</FormLabel>
            <FormGroup>
              {
                afterTestClosedState.map((e, index) => (
                  <FormControlLabel
                    key={index}
                    control={<Checkbox
                      color='primary'
                      checked={e.value}
                      onChange={handleChangeClosedCheckbox(index)}
                      name={e.label} />}
                    label={e.label}
                  />
                ))
              }
            </FormGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography className={classes.heading}>Security</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className={classes.passWordRow}>
            <p>Password&nbsp;:</p>
            <input />
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default SettingTab
