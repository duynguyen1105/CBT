import produce from "immer";
import { SET_QUESTION_QUERY } from "./actionTypes";

export interface IQuestionState {
  query: IQuery;
}

export interface IQuery {
  sortBy: string;
  sortOrder: string;
  keyword: string;
  pageSize: number;
  pageIndex: number;
}

const initial: IQuestionState = {
  query: {
    sortBy: "id",
    sortOrder: "asc",
    keyword: "",
    pageSize: 10,
    pageIndex: 1,
  },
};

export const questionReducers = (state = initial, action: any) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_QUESTION_QUERY: {
        draft.query = { ...action.payload };
        return draft;
      }
      default:
        return draft;
    }
  });
