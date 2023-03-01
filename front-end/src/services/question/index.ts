import { AppAPIInstance } from "../configApi";
import { API } from "config/constants";
import { getQuery } from "helpers";
import { IQuery } from "store/reducers/question";

export const getListQuestion = async (params: IQuery): Promise<any> => {
  return AppAPIInstance.get(API.QUESTION.DEFAULT + getQuery(params));
};

export const deleteByIds = async (idsArr: string[]): Promise<any> => {
  return AppAPIInstance.delete(API.QUESTION.DELETE, {
    data: {
      ids: idsArr.join(","),
    },
  });
};

export const createQuestion = async (data: any): Promise<any> => {
  return AppAPIInstance.post(API.QUESTION.CREATE, data);
};
