import produce from "immer";
import { SET_CLASSES_QUERY, SET_OPEN_CLOSE_DIALOG } from "./actionType";

export interface IClassesState {
  query: IQuery;
  isOpenDialogSubmit: boolean;
}

export interface IQuery {
  sortBy: string;
  sortOrder: string;
  keyword: string;
  pageSize: number;
  pageIndex: number;
}

const initial: IClassesState = {
  query: {
    sortBy: "id",
    sortOrder: "asc",
    keyword: "",
    pageSize: 10,
    pageIndex: 1,
  },
  isOpenDialogSubmit: false,
};

export const classesReducers = (state = initial, action: any) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_CLASSES_QUERY: {
        draft.query = { ...action.payload };
        return draft;
      }
      case SET_OPEN_CLOSE_DIALOG: {
        draft.isOpenDialogSubmit = action.payload;
        break;
      }
      default:
        return draft;
    }
  });
