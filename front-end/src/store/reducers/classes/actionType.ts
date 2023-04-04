export const SET_CLASSES_QUERY: string = "SET_CLASSES_QUERY";
export const SET_OPEN_CLOSE_DIALOG: string = "SET_OPEN_CLOSE_DIALOG";

export const setOpenSubmit = (loading: boolean) => {
  return {
    type: SET_OPEN_CLOSE_DIALOG,
    payload: loading,
  };
};
