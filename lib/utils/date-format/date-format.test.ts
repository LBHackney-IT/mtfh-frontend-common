import {
  dateToString,
  formatDate,
  formatTime,
  isFutureDate,
  stringToDate,
} from "./date-format";

test("formats the date correctly", () => {
  expect(formatDate("2021-01-01")).toBe("01/01/2021");
});

test("formatted date treats 1900-01-01 as null", () => {
  expect(formatDate("1900-01-01")).toBe("");
});

test("formatted date will not break with a malformed date string", () => {
  expect(formatDate("hello")).toBe("");
});

test("formatted date will not break with a null date value", () => {
  expect(formatDate(null)).toBe("");
});

test("is future date", () => {
  expect(isFutureDate("1900-01-01")).toBe(true);
  expect(isFutureDate(null)).toBe(true);
  expect(isFutureDate("2100-01-02")).toBe(true);
});

test("formats the time correctly", () => {
  expect(formatTime("2023-03-16T11:36:25Z")).toBe("11:36:25");
});

test("formatted time will not break with a malformed date string", () => {
  expect(formatTime("hello")).toBe("");
});

test("formatted time will not break with a null date value", () => {
  expect(formatTime(null)).toBe("");
});

test("dateToString will convert date to string correctly", () => {
  let date = stringToDate("2023-10-03 10:38 AM", "yyyy-MM-dd hh:mm a");
  expect(dateToString(date, "yyyy-MM-dd'T'HH:mm:ss")).toBe("2023-10-03T10:38:00");

  date = stringToDate("2023-10-03 10:38 PM", "yyyy-MM-dd hh:mm a");
  expect(dateToString(date, "yyyy-MM-dd'T'HH:mm:ss")).toBe("2023-10-03T22:38:00");
});
