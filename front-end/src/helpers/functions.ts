import { IQuery } from "store/reducers/question";

export const checkTypeSort = (key: string, query: { sortBy?: string; sortOrder?: string }): any => {
  if (query.sortBy !== key) return "";
  if (query.sortOrder === "asc") return "az";
  return "za";
};

export const getNewSort = (key: string, sortBy?: string, sortOrder?: string) => {
  if (sortBy === key)
    return {
      sortBy: key,
      sortOrder: sortOrder === "asc" ? "desc" : "asc",
    };
  else {
    return {
      sortBy: key,
      sortOrder: "asc",
    };
  }
};
export const formatMoney = (num: number | string, decimalCount = 2, thousands = ",") => {
  if (!num) return 0;
  const n = "string" === typeof num ? +num : num;

  if (!decimalCount)
    return n
      .toFixed(1)
      .replace(/\d(?=(\d{3})+\.)/g, `$&${thousands}`)
      .replace(".0", "");
  return n.toFixed(decimalCount).replace(/\d(?=(\d{3})+\.)/g, `$&${thousands}`);
};

export const getPageAfterDelete = (totalCurrent: number, pageCurrent: number, pageSize: number, num: number) => {
  let page = pageCurrent;
  if (pageCurrent === num) page = page - 1;
  else {
    const totalNew = totalCurrent - num;
    const maxPage = Math.ceil(totalNew / pageSize);
    if (pageCurrent > maxPage) page = page - 1;
  }
  if (page <= 0) page = 1;
  return page;
};

export const copyTextToClipboard = (text: string) => {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(
    function () {
      console.log("Async: Copying to clipboard was successful!");
    },
    function (err) {
      console.error("Async: Could not copy text: ", err);
    }
  );
};

export const parseJwt = (token: string = "") => {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  try {
    return JSON.parse(jsonPayload);
  } catch (e) {
    return {};
  }
};

const fallbackCopyTextToClipboard = (text: string) => {
  var textArea = document.createElement("textarea");
  textArea.value = text;

  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    const successful = document.execCommand("copy");
    const msg = successful ? "successful" : "unsuccessful";
    console.log("Fallback: Copying text command was " + msg);
  } catch (err) {
    console.error("Fallback: Oops, unable to copy", err);
  }

  document.body.removeChild(textArea);
};

export const sleep = (ms: number) => {
  return new Promise((resole) => setTimeout(resole, ms));
};

export const getQuery = (query: IQuery) => {
  return `?search=${query.keyword}&sort=${query.sortBy},${query.sortOrder}&limit=${query.pageSize}&page=${query.pageIndex}`;
};
