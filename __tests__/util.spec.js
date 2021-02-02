import { formatTime } from "../src/util";

describe("Utils tests", () => {
  test("Time Formatter, 360000 is 1 hr", () => {
    const time = 3600000;
    const formattedTime = formatTime(time);
    expect(formattedTime).toBe("01:00:00.000");
  });
  test("Time Formatter, 60000 is 1 min", () => {
    const time = 60000;
    const formattedTime = formatTime(time);
    expect(formattedTime).toBe("00:01:00.000");
  });
  test("Time Formatter, 0 returns 00:00:00.000", () => {
    const time = 0;
    const formattedTime = formatTime(time);
    expect(formattedTime).toBe("00:00:00.000");
  });
});
