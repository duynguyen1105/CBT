import {
  Table, TableBody, TableCell, TableContainer, TableHead,
  TableRow, Grid, TextField, Checkbox
} from "@material-ui/core"
import ButtonAction from "components/ButtonAction"
import ButtonsOutline from "components/ButtonsOutline"
import PopupEditAnswer from "components/PopupEditAnswer"
import { memo, useState } from "react"
import { headerOption, SelectOneAnswer } from './models'
import useStyles from "./styles"
import Images from 'config/images'


const SelectOneAnswerForm = memo(() => {
  const classes = useStyles()
  const [openEdit, setOpenEdit] = useState(false)

  const initialQuestion: SelectOneAnswer[] = [
    {
      displayOrder: 0,
      content: '123',
      score: 100,
      isCorrect: true
    },
    {
      displayOrder: 1,
      content: "123",
      score: 0,
      isCorrect: false
    },
  ]
  const [answerList, setAnswerList] = useState<SelectOneAnswer[]>(initialQuestion)

  return (
    <Grid container >
      <p className={classes.label}>Answer</p>
      <TableContainer className={classes.tableContainer}>
        <Table>
          <TableHead className={classes.tableHead}>
            <TableRow>
              {headerOption?.map((option, index) =>
                <TableCell align="center" style={{ minWidth: option.width }} key={index}>
                  {option.name}
                </TableCell>)}
              <TableCell align="center" style={{ minWidth: 80 }}>
                ADVANCE
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className={classes.tableBody}>
            {answerList && answerList.map((row, index) => {
              return (
                <TableRow
                  key={index}
                >
                  <TableCell align="center">{row.displayOrder}</TableCell>
                  <TableCell className={classes.answerContent} >
                    <TextField
                      fullWidth
                      multiline
                      InputProps={{
                        disableUnderline: true,
                      }}
                      defaultValue={row.content}
                    />
                  </TableCell>
                  <TableCell align="center" className={classes.answerScore}>
                    <TextField
                      fullWidth
                      InputProps={{
                        disableUnderline: true,
                      }}
                      defaultValue={row.score}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <Checkbox color="primary" />
                  </TableCell>
                  <TableCell align="center">
                    <ButtonAction
                      btnType="edit"
                      onClick={() => setOpenEdit(true)} />
                    <ButtonAction
                      btnType="delete"
                      onClick={() => { }} />
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <ButtonsOutline
        className={classes.moreBtn}
        children="More Option"
        icon={Images.CBTicPlusCircleGreen}
        placementIcon={true}
      />
      <PopupEditAnswer
        open={openEdit}
        onClickCancel={() => setOpenEdit(false)}
        onClickSuccess={() => setOpenEdit(false)}
      />
    </Grid>
  )
});

export default SelectOneAnswerForm