import { AppAPIInstance } from "../configApi";
import { API } from "config/constants";

export const getListQuestion = async (params: { [key in string]: any }): Promise<any> => {
  return AppAPIInstance.get(API.QUESTION.DEFAULT);
};
