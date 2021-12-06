import { isUnderEighteen } from "../age";

beforeAll(() => {
  jest.useFakeTimers("modern");
  jest.setSystemTime(new Date("2021-12-25"));
});

afterAll(() => {
  jest.useRealTimers();
});

describe("isUnderEighteen", () => {
  it("returns true as person is under 18", () => {
    expect(isUnderEighteen("2003-12-26T00:00:00")).toBeTruthy();
  });
  it("returns false as person is 18 today", () => {
    expect(isUnderEighteen("2003-12-25T00:00:00")).toBeFalsy();
  });
  it("returns false as person is over 18", () => {
    expect(isUnderEighteen("2003-12-24T00:00:00")).toBeFalsy();
  });
  it("returns true as dob is invalid", () => {
    expect(isUnderEighteen("invalid-date")).toBeTruthy();
  });
});
