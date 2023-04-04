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
} from "@material-ui/core";
import BreadcrumbsCustom from "components/BreadcrumbsCustom";
import ButtonAction from "components/ButtonAction";
import Buttons from "components/Buttons";
import ButtonsOutline from "components/ButtonsOutline";
import IconSort from "components/IconSort";
import InputSearch from "components/InputSearch";
import Paginations from "components/Pagination";
import PopupConfirm from "components/PopupConfirm";
import TestLabelStatus from "components/TestLabelStatus";
import images from "config/images";
import { checkTypeSort, getNewSort } from "helpers";
import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { routes } from "routers/routes";
import { reducerType } from "store/reducers";
import { IClassesState } from "store/reducers/classes";
import { fakeDataClasses, HeaderTableClasses } from "./models";
import * as actionClasses from "store/reducers/classes/actionType";
import useStyles from "./styles";
import * as _ from "lodash";

const Classes: FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const [selected, setSelected] = useState<readonly string[]>([]);
  const [deleteOpen, setDeleteOpen] = useState<boolean>(false);
  const isSelected = (id: string) => selected.indexOf(id) !== -1;

  const classesProps: IClassesState = useSelector(
    (state: reducerType) => state.classes
  );

  const handleChangeKeyWord = _.debounce((e) => {
    const { query } = { ...classesProps };
    const keyword = e?.target?.value || "";
    dispatch({
      type: actionClasses.SET_CLASSES_QUERY,
      payload: { ...query, keyword },
    });
    setSelected([]);
  }, 300);

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
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = fakeDataClasses.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const checkIconSort = (key: string): any => {
    return checkTypeSort(key, classesProps.query);
  };

  const handleChangeSort = (key: string) => () => {
    const { query } = { ...classesProps };
    dispatch({
      type: actionClasses.SET_CLASSES_QUERY,
      payload: { ...query, ...getNewSort(key, query.sortBy, query.sortOrder) },
    });
  };

  const handleEditClasses = (classId: string) => () => {
    history.push(routes.class.edit.replace(":classId", classId));
  };

  const handleCreateClasses = () => {
    history.push(routes.class.create);
  };

  const handleClickDelete = (id: string) => () => {
    setSelected([id]);
    setTimeout(() => setDeleteOpen(true), 100);
  };

  const handleOpenDeleteDialog = () => {
    setDeleteOpen(true);
  };

  const handleClickCancelDelete = () => {
    setDeleteOpen(false);
    setSelected([]);
  };

  const handleClickSuccessDelete = () => {
    console.log(
      "🚀 ~ file: index.tsx:50 ~ handleClickSuccessDelete ~ handleClickSuccessDelete"
    );
  };

  const handleChangePage = (page: number) => {
    console.log(
      "🚀 ~ file: index.tsx:56 ~ handleChangePage ~ handleChangePage"
    );
    setSelected([]);
  };

  const oneChangePageSize = (size: number) => {
    console.log(
      "🚀 ~ file: index.tsx:63 ~ oneChangePageSize ~ oneChangePageSize"
    );
    setSelected([]);
  };
  return (
    <Grid container>
      <Grid container className={classes.container}>
        <Grid item md={12} className={classes.header}>
          <BreadcrumbsCustom
            name="My Classes"
            icon={images.CBTicStackRed}
            link2="List"
          />
          <div className={classes.avatar}>
            <p>Hi! Julia</p>
            <Avatar />
          </div>
        </Grid>
        <Grid className={classes.actionRowLeft}>
          <InputSearch
            defaultValue={""}
            onChange={handleChangeKeyWord}
            placeholder="Search here..."
            search
          />
        </Grid>
        <Grid className={classes.actionRowRight}>
          {selected?.length !== 0 && (
            <>
              <div>{`${selected.length} classes selected`}</div>
              <ButtonsOutline
                onClick={handleOpenDeleteDialog}
                children="Delete"
                icon={images.CBTicTrashRed}
                placementIcon
              />
            </>
          )}
          <Buttons
            children="Create"
            icon={images.CBTicPlusCircle}
            onClick={handleCreateClasses}
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
                    fakeDataClasses?.length > 0 &&
                    selected.length === fakeDataClasses.length
                  }
                  indeterminate={
                    selected.length > 0 &&
                    selected.length < fakeDataClasses.length
                  }
                  inputProps={{
                    "aria-label": "select all desserts",
                  }}
                />
              </TableCell>
              {HeaderTableClasses?.map((option, index) => (
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
            {fakeDataClasses &&
              fakeDataClasses.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                return (
                  <TableRow
                    key={index}
                    onClick={() => handleChangeCheckbox(row.id)}
                  >
                    <TableCell align="center" style={{ width: 58 }}>
                      <Checkbox
                        checked={isItemSelected}
                        className="custom-color-default"
                      />
                    </TableCell>
                    <TableCell>{row.classID}</TableCell>
                    <TableCell>{row.className}</TableCell>
                    <TableCell>{row.teacher}</TableCell>
                    <TableCell>{row.startTime}</TableCell>
                    <TableCell>{row.endTime}</TableCell>
                    <TableCell>
                      <TestLabelStatus typeStatus={row.status} />
                    </TableCell>
                    <TableCell
                      align="center"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ButtonAction
                        btnType="edit"
                        onClick={handleEditClasses(row.id)}
                      />
                      <ButtonAction
                        btnType="delete"
                        onClick={handleClickDelete(row.id)}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
        <Paginations
          total={fakeDataClasses.length}
          size={12}
          currentPage={1}
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
  );
};

export default Classes;
