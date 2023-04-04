import { capitalizeFirstLetter } from "./capFirstLetter";

describe("capitalize first letter", () => {
  it("should return undefined when no word is passed", () => {
    const result = capitalizeFirstLetter("");
    expect(result).toBeUndefined();
  });
  it("should work for string values", () => {
    const result = capitalizeFirstLetter("dog");
    expect(result).toBe("Dog");
  });
});
