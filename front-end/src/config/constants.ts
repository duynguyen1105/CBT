export const API = {
  AUTH_USER: {
    LOGIN: "/auth/login",
  },
  QUESTION: {
    DEFAULT: "/question/ws1",
    DELETE: "/question/ws1/delete",
    CREATE: "/question/ws1/createQuestion",
  },
};
export const isRefreshing = "isRefreshing";
export const ACCESS_TOKEN = "ACCESS_TOKEN";
export const patternEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
export const patternUserName = /^[a-z0-9._]*$/i;
export const patternURL =
  /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i;
export const MAX_SIZE_UPLOAD_IMG = 2 * 1024 * 1024;
export const KEY_JWT = "520833811277-bt8q2jd81mbmeo5o817bltrqac1ckik7.apps.googleusercontent.com";
export const patternPassword = /(?=^.{8,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)[0-9a-zA-Z!@#$%^&*()]*$/;
export const KEY_ROLES = "Labbit:Role";
export const patternPhoneNumber = /^([0-9]{10})$/;
