import moment from "moment";

export const convertTimeUTCToLocal = (date: Date | string) => {
  if (!date) return null;
  if ("string" === typeof date) date = date.replace(/Z$/i, "");
  return new Date(
    moment
      .utc(date)
      .local()
      .toString()
  );
};

// format ex: September 30, 2021
export const formatDate = (day?: string) => {
  if (!day) return null;
  if (!day) return;
  var date = day.slice(0, 10).split("-");
  date[1] =
    date[1] === "01"
      ? "January"
      : date[1] === "02"
      ? "February"
      : date[1] === "03"
      ? "March"
      : date[1] === "04"
      ? "April"
      : date[1] === "05"
      ? "May"
      : date[1] === "06"
      ? "June"
      : date[1] === "07"
      ? "July"
      : date[1] === "08"
      ? "August"
      : date[1] === "09"
      ? "September"
      : date[1] === "10"
      ? "October"
      : date[1] === "11"
      ? "November"
      : "December";
  return `${date[1]} ${date[2]}, ${date[0]}`;
};

export const convertTimeToUTC = (time: Date) => {
  const date = new Date(time);
  return new Date(date.getTime() - date.getTimezoneOffset() * 60000);
};
