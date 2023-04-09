import { Avatar, Checkbox, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import BreadcrumbsCustom from "components/BreadcrumbsCustom";
import ButtonAction from "components/ButtonAction";
import Buttons from "components/Buttons";
import ButtonsOutline from "components/ButtonsOutline";
import IconSort from "components/IconSort";
import InputSearch from "components/InputSearch";
import Paginations from "components/Pagination";
import PopupConfirm from "components/PopupConfirm";
import QuestionLabelStatus from "components/QuestionLabelStatus";
import Images from "config/images";
import { checkTypeSort, formatDate, getNewSort, getPageAfterDelete } from "helpers";
import * as _ from "lodash";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { routes } from "routers/routes";
import { reducerType } from "store/reducers";
import { IQuestionState } from "store/reducers/question";
import * as actionsQuestion from "store/reducers/question/actionTypes";
import { headerOption } from "./models";
import useStyles from "./styles";
import { IQuestionListItem } from "models/question";
import * as questionServices from "services/question";
import * as actionGlobal from "store/reducers/global/actionTypes";
import { listQuestionCategory, listQuestionType } from "models/question";

const QuestionList = () => {
  const [deleteOpen, setDeleteOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();

  const questionProps: IQuestionState = useSelector((state: reducerType) => state.question);

  const [dataList, setDataList] = useState<IQuestionListItem[]>([]);
  const [selected, setSelected] = useState<readonly string[]>([]);
  const [total, setTotal] = useState(dataList.length);

  useEffect(() => {
    getDataList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questionProps]);

  const getDataList = async () => {
    dispatch({ type: actionGlobal.SET_LOADING_PAGE, payload: true });
    await questionServices
      .getListQuestion(questionProps.query)
      .then((r) => {
        const maxPage = Math.ceil(r.total / questionProps.query.pageSize);
        if (maxPage < questionProps.query.pageIndex) {
          handleChangePage(maxPage);
          return null;
        }
        setDataList(r.data.allQuestions);
        setTotal(r.totalCount);
      })
      .catch((e) => {
        dispatch({ type: actionGlobal.SET_MESSAGE_ERROR, payload: e.message });
      })
      .finally(() => dispatch({ type: actionGlobal.SET_LOADING_PAGE, payload: false }));
  };

  const handleChangePage = (page: number) => {
    const { query } = { ...questionProps };
    query.pageIndex = page;
    dispatch({ type: actionsQuestion.SET_QUESTION_QUERY, payload: query });
    setSelected([]);
  };

  const oneChangePageSize = (size: number) => {
    const { query } = { ...questionProps };
    query.pageIndex = 1;
    query.pageSize = size;
    dispatch({ type: actionsQuestion.SET_QUESTION_QUERY, payload: query });
    setSelected([]);
  };
  const checkIconSort = (key: string): any => {
    return checkTypeSort(key, questionProps.query);
  };

  const handleChangeSort = (key: string) => () => {
    const { query } = { ...questionProps };
    dispatch({ type: actionsQuestion.SET_QUESTION_QUERY, payload: { ...query, ...getNewSort(key, query.sortBy, query.sortOrder) } });
  };

  const handleChangeKeyWord = _.debounce((e) => {
    const { query } = { ...questionProps };
    const keyword = e?.target?.value || "";
    dispatch({ type: actionsQuestion.SET_QUESTION_QUERY, payload: { ...query, keyword } });
    setSelected([]);
  }, 300);

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = dataList.map((n) => n._id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };
  const handleChangeCheckbox = (id: string) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly string[] = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };

  const handleEditQuestion = (_id: string) => () => {
    history.push(routes.question.edit.replace(":questionId", _id));
  };
  const handleOpenDeleteDialog = () => {
    setDeleteOpen(true);
  };

  const handleCreateQuestion = () => {
    history.push(routes.question.create);
  };
  const isSelected = (id: string) => selected.indexOf(id) !== -1;

  const handleClickCancelDelete = () => {
    setDeleteOpen(false);
    setSelected([]);
  };

  const handleClickSuccessDelete = () => {
    setDeleteOpen(false);
    dispatch({ type: actionGlobal.SET_LOADING_PAGE, payload: true });
    questionServices
      .deleteByIds([...selected])
      .then((r) => {
        const page = getPageAfterDelete(total, questionProps.query.pageIndex, questionProps.query.pageSize, selected.length);
        setSelected([]);
        handleChangePage(page);
      })
      .catch((e) => {
        dispatch({ type: actionGlobal.SET_MESSAGE_ERROR, payload: e.message });
      })
      .finally(() => dispatch({ type: actionGlobal.SET_LOADING_PAGE, payload: false }));
  };

  const handleClickDelete = (id: string) => () => {
    setSelected([id]);
    setTimeout(() => setDeleteOpen(true), 100);
  };

  const getQuestionCategoryLabel = (categoryValue: string) => {
    return listQuestionCategory?.find((e) => e.value === categoryValue)?.label ?? "";
  };
  const getQuestionTypeLabel = (typeValue: string) => {
    return listQuestionType?.find((e) => e.value === typeValue)?.label ?? "";
  };
  return (
    <Grid container>
      <Grid container className={classes.container}>
        <Grid item md={12} className={classes.header}>
          <BreadcrumbsCustom name="Question Bank" icon={Images.CBTicFileTextRed} link2="List question" />
          <div className={classes.avatar}>
            <p>Hi! Julia Falling on you</p>
            <Avatar />
          </div>
        </Grid>
        <Grid className={classes.actionRowLeft}>
          <InputSearch defaultValue={questionProps.query.keyword} onChange={handleChangeKeyWord} placeholder="Search here..." search />
        </Grid>
        <Grid className={classes.actionRowRight}>
          {selected?.length !== 0 && (
            <>
              <div>{`${selected.length} question selected`}</div>
              <ButtonsOutline onClick={handleOpenDeleteDialog} children="Delete" icon={Images.CBTicTrashRed} placementIcon />
            </>
          )}
          <Buttons children="Create" icon={Images.CBTicPlusCircle} onClick={handleCreateQuestion} placementIcon />
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
                  checked={dataList?.length > 0 && selected.length === dataList.length}
                  indeterminate={selected.length > 0 && selected.length < dataList.length}
                  inputProps={{
                    "aria-label": "select all desserts",
                  }}
                />
              </TableCell>
              {headerOption?.map((option, index) => (
                <TableCell style={{ minWidth: option.width }} key={index}>
                  {option.name}
                  {<IconSort typeSort={checkIconSort(option.key)} onClick={handleChangeSort(option.key)} />}
                </TableCell>
              ))}
              <TableCell align="center" style={{ minWidth: 100 }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className={classes.tableBody}>
            {dataList?.length > 0 &&
              dataList?.map((row, index) => {
                const isItemSelected = isSelected(row._id);
                return (
                  <TableRow key={index} onClick={() => handleChangeCheckbox(row._id)}>
                    <TableCell align="center" style={{ width: 58 }}>
                      <Checkbox checked={isItemSelected} className="custom-color-default" />
                    </TableCell>
                    <TableCell>{row._id}</TableCell>
                    <TableCell>{row.questionTitle}</TableCell>
                    <TableCell>{getQuestionTypeLabel(row.questionType)}</TableCell>
                    <TableCell>{formatDate(row.createdAt)}</TableCell>
                    <TableCell>{getQuestionCategoryLabel(row.category)}</TableCell>
                    <TableCell>
                      <QuestionLabelStatus typeStatus={row.status} />
                    </TableCell>
                    <TableCell align="center" onClick={(e) => e.stopPropagation()}>
                      <ButtonAction btnType="edit" onClick={handleEditQuestion(row._id)} />
                      <ButtonAction btnType="delete" onClick={handleClickDelete(row._id)} />
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
        <Paginations total={dataList.length} size={questionProps.query.pageSize} currentPage={questionProps.query.pageIndex} onChange={handleChangePage} oneChangePageSize={oneChangePageSize} />
      </TableContainer>
      <PopupConfirm
        className={classes.popupconfirm}
        title={`Are you sure to delete ${selected.length} Question(s)?`}
        text={`Once deleted, you cannot bring it back.`}
        open={deleteOpen}
        onClickSuccess={handleClickSuccessDelete}
        onClickCancel={handleClickCancelDelete}
      />
    </Grid>
  );
};

export default QuestionList;
