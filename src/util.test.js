import { formatTime } from "./util";

describe("Util tests", () => {
  test("Time Formatter, 360000 is 1 hr", () => {
    expect(formatTime(3600000)).toBe("01:00:00.000");
  });
  test("Time Formatter, 60000 is 1 min", () => {
    expect(formatTime(60000)).toBe("00:01:00.000");
  });
  test("Time Formatter, 0 returns 00:00:00.000", () => {
    expect(formatTime(0)).toBe("00:00:00.000");
  });
});
