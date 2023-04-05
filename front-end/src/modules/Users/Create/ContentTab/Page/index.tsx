import { Checkbox, FormControlLabel, Grid } from '@material-ui/core';
import ButtonsOutline from 'components/ButtonsOutline';
import Images from 'config/images';
import { useState } from 'react';
import ANewQuestion from '../ANewQuestion';
import Description from '../Description';
import SingleSection from '../Section';
import SelectContentPopup from '../SelectContentPopup';
import useStyles from './styles';

interface PageProps {
  pageNumber: number
}

const Page = (props: PageProps) => {
  const { pageNumber } = props
  const classes = useStyles();
  const [shuffle, setShuffle] = useState(false)
  const [open, setOpen] = useState(false)

  const handleChangeShuffle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShuffle(event.target.checked)
  }
  return (
    <Grid container className={classes.container}>
      <p className={classes.title}>{`Page ${pageNumber}`}</p>
      <FormControlLabel
        control={<Checkbox
          color='primary'
          checked={shuffle}
          onChange={handleChangeShuffle}
          name="shuffle" />}
        label="Shuffle Question"
      />
      <Grid item md={12}>
        <Description
          page={pageNumber}
          index={1}
        />
        <ANewQuestion
          page={pageNumber}
          index={1}
        />
        <SingleSection
          page={pageNumber}
          index={1}
        />
      </Grid>
      <Grid item container justify="flex-end" md={12} >
        <ButtonsOutline
          children='Add Content'
          className={classes.addNewBtn}
          icon={Images.CBTicPluscircleBlue}
          onClick={() => setOpen(!open)}
        />
        <SelectContentPopup
          open={open}
          onClose={() => setOpen(false)}
        />
      </Grid>
    </Grid>
  );
}

export default Page
