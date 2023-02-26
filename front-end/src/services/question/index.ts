import { AppAPIInstance } from "../configApi";
import { API } from "config/constants";
import { getQuery } from "helpers";
import { IQuery } from "store/reducers/question";

export const getListQuestion = async (params: IQuery): Promise<any> => {
  return AppAPIInstance.get(API.QUESTION.DEFAULT + getQuery(params));
};
