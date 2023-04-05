import {
  Avatar,
  Checkbox,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core'
import BreadcrumbsCustom from 'components/BreadcrumbsCustom'
import ButtonAction from 'components/ButtonAction'
import Buttons from 'components/Buttons'
import ButtonsOutline from 'components/ButtonsOutline'
import IconSort from 'components/IconSort'
import InputSearch from 'components/InputSearch'
import Paginations from 'components/Pagination'
import PopupConfirm from 'components/PopupConfirm'
import TestLabelStatus from 'components/TestLabelStatus'
import Images from 'config/images'
import { checkTypeSort, getNewSort } from 'helpers'
import * as _ from 'lodash'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { routes } from 'routers/routes'
import { reducerType } from 'store/reducers'
import { IQuestionState } from 'store/reducers/question'
import * as actionsQuestion from 'store/reducers/question/actionTypes'
import { dataList, headerOption } from './models'
import useStyles from './styles'

const UserList = () => {
  const [deleteOpen, setDeleteOpen] = useState<boolean>(false)
  const dispatch = useDispatch()
  const classes = useStyles()
  const history = useHistory()

  const questionProps: IQuestionState = useSelector(
    (state: reducerType) => state.question
  )

  //const [dataList, setDataList] = useState<Question[]>([]);
  const [selected, setSelected] = useState<readonly string[]>([])
  //const [total, setTotal] = useState(dataList.length);

  // useEffect(() => {
  //   getDataList();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [questionProps]);

  // const getDataList = async () => {
  //   dispatch({ type: actionGlobal.SET_LOADING_PAGE, payload: true })
  //   await questionServices.getListQuestion(questionProps.query)
  //     .then(r => {
  //       const maxPage = Math.ceil(r.total / questionProps.query.pageSize)
  //       if (maxPage < questionProps.query.pageIndex) {
  //         handleChangePage(maxPage)
  //         return null
  //       }
  //       setDataList(r.data)
  //       setTotal(r.totalCount);
  //     })
  //     .catch(e => {
  //       dispatch({ type: actionGlobal.SET_MESSAGE_ERROR, payload: e.message })
  //     })
  //     .finally(() => dispatch({ type: actionGlobal.SET_LOADING_PAGE, payload: false }))
  // }

  const handleChangePage = (page: number) => {
    const { query } = { ...questionProps }
    query.pageIndex = page
    dispatch({ type: actionsQuestion.SET_QUESTION_QUERY, payload: query })
    setSelected([])
  }

  const oneChangePageSize = (size: number) => {
    const { query } = { ...questionProps }
    query.pageIndex = 1
    query.pageSize = size
    dispatch({ type: actionsQuestion.SET_QUESTION_QUERY, payload: query })
    setSelected([])
  }
  const checkIconSort = (key: string): any => {
    return checkTypeSort(key, questionProps.query)
  }

  const handleChangeSort = (key: string) => () => {
    const { query } = { ...questionProps }
    dispatch({
      type: actionsQuestion.SET_QUESTION_QUERY,
      payload: { ...query, ...getNewSort(key, query.sortBy, query.sortOrder) },
    })
  }

  const handleChangeKeyWord = _.debounce((e) => {
    const { query } = { ...questionProps }
    const keyword = e?.target?.value || ''
    dispatch({
      type: actionsQuestion.SET_QUESTION_QUERY,
      payload: { ...query, keyword },
    })
    setSelected([])
  }, 300)

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = dataList.map((n) => n.userId)
      setSelected(newSelecteds)
      return
    }
    setSelected([])
  }
  const handleChangeCheckbox = (id: string) => {
    const selectedIndex = selected.indexOf(id)
    let newSelected: readonly string[] = []
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      )
    }
    setSelected(newSelected)
  }

  const handleEditTest = (userId: string) => () => {
    history.push(routes.test.edit.replace(':testId', userId))
  }
  const handleOpenDeleteDialog = () => {
    setDeleteOpen(true)
  }

  const handleCreateUser = () => {
    history.push(routes.test.create)
  }
  const isSelected = (id: string) => selected.indexOf(id) !== -1

  const handleClickCancelDelete = () => {
    setDeleteOpen(false)
    setSelected([])
  }

  const handleClickSuccessDelete = () => {
    // setDeleteOpen(false);
    // dispatch({ type: actionGlobal.SET_LOADING_PAGE, payload: true })
    // questionServices.deleteByIds([...selected])
    //   .then(r => {
    //     const page = getPageAfterDelete(total, questionProps.query.pageIndex, questionProps.query.pageSize, selected.length);
    //     setSelected([])
    //     handleChangePage(page)
    //   })
    //   .catch(e => {
    //     dispatch({ type: actionGlobal.SET_MESSAGE_ERROR, payload: e.message })
    //   })
    //   .finally(() => dispatch({ type: actionGlobal.SET_LOADING_PAGE, payload: false }))
  }

  const handleClickDelete = (id: string) => () => {
    setSelected([id])
    setTimeout(() => setDeleteOpen(true), 100)
  }

  return (
    <Grid container>
      <Grid container className={classes.container}>
        <Grid item md={12} className={classes.header}>
          <BreadcrumbsCustom
            name="Test Bank"
            icon={Images.CBTicStackRed}
            link2="List test"
          />
          <div className={classes.avatar}>
            <p>Hi! Julia Falling on you</p>
            <Avatar />
          </div>
        </Grid>
        <Grid className={classes.actionRowLeft}>
          <InputSearch
            defaultValue={questionProps.query.keyword}
            onChange={handleChangeKeyWord}
            placeholder="Search here..."
            search
          />
        </Grid>
        <Grid className={classes.actionRowRight}>
          {selected?.length !== 0 && (
            <>
              <div>{`${selected.length} question selected`}</div>
              <ButtonsOutline
                onClick={handleOpenDeleteDialog}
                children="Delete"
                icon={Images.CBTicTrashRed}
                placementIcon
              />
            </>
          )}
          <Buttons
            children="Create"
            icon={Images.CBTicPlusCircle}
            onClick={handleCreateUser}
            placementIcon
          />
        </Grid>
      </Grid>
      <TableContainer className={classes.tableContainer}>
        <Table>
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell align="center" style={{ width: 58 }}>
                <Checkbox
                  onChange={handleSelectAllClick}
                  className={`${classes.headerCheckbox} custom-color-default`}
                  checked={
                    dataList?.length > 0 && selected.length === dataList.length
                  }
                  indeterminate={
                    selected.length > 0 && selected.length < dataList.length
                  }
                  inputProps={{
                    'aria-label': 'select all desserts',
                  }}
                />
              </TableCell>
              {headerOption?.map((option, index) => (
                <TableCell style={{ minWidth: option.width }} key={index}>
                  {option.name}
                  {
                    <IconSort
                      typeSort={checkIconSort(option.key)}
                      onClick={handleChangeSort(option.key)}
                    />
                  }
                </TableCell>
              ))}
              <TableCell align="center" style={{ minWidth: 100 }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className={classes.tableBody}>
            {dataList &&
              dataList.map((row, index) => {
                const isItemSelected = isSelected(row.userId)
                return (
                  <TableRow
                    key={index}
                    onClick={() => handleChangeCheckbox(row.userId)}
                  >
                    <TableCell align="center" style={{ width: 58 }}>
                      <Checkbox
                        checked={isItemSelected}
                        className="custom-color-default"
                      />
                    </TableCell>
                    <TableCell>{row.userId}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.createdBy}</TableCell>
                    <TableCell>{row.createOn}</TableCell>
                    <TableCell>
                      <TestLabelStatus typeStatus={row.status} />
                    </TableCell>
                    <TableCell
                      align="center"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ButtonAction
                        btnType="edit"
                        onClick={handleEditTest(row.userId)}
                      />
                      <ButtonAction
                        btnType="delete"
                        onClick={handleClickDelete(row.userId)}
                      />
                    </TableCell>
                  </TableRow>
                )
              })}
          </TableBody>
        </Table>
        <Paginations
          total={dataList.length}
          size={questionProps.query.pageSize}
          currentPage={questionProps.query.pageIndex}
          onChange={handleChangePage}
          oneChangePageSize={oneChangePageSize}
        />
      </TableContainer>
      <PopupConfirm
        className={classes.popupconfirm}
        title={`Are you sure to delete ${selected.length} Test(s)?`}
        text={`Once deleted, you cannot bring it back.`}
        open={deleteOpen}
        onClickSuccess={handleClickSuccessDelete}
        onClickCancel={handleClickCancelDelete}
      />
    </Grid>
  )
}

export default UserList
