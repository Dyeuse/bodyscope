import {
  round,
  isInRange,
  calcBMI,
  calcBFP,
  calcFFMI,
  calcBMR,
  calcTDEE,
} from "./formulas";

describe("Function used to round", () => {
  it("should round a number to n decimal places", () => {
    expect(round(88)).toEqual(88);
    expect(round(1.1)).toEqual(1);
    expect(round(5.5)).toEqual(6);
    expect(round(145.98755, 2)).toEqual(145.99);
    expect(round(987.459777, 3)).toEqual(987.46);
  });
});

describe("Function used to check if a value is in a range", () => {
  it("should check if a value is in a range and return true or false", () => {
    expect(isInRange(4, 1, 7)).toEqual(true);
    expect(isInRange(2, 5, 11)).toEqual(false);
    expect(isInRange(478, 24, 387)).toEqual(false);
  });
  it("should throw an exception", () => {
    expect(() => isInRange(89, 110, 50)).toThrow(
      /Min must be smaller than max/
    );
  });
});

describe("BMI => Body Mass Index", () => {
  it("should calculate the BMI", () => {
    expect(calcBMI({ height: 180, weight: 75 })).toEqual(23.1);
    expect(calcBMI({ height: 165, weight: 55 })).toEqual(20.2);
  });
});

describe("BFP => Body Fat Percentage", () => {
  it("should calculate the BFP", () => {
    const userData1 = { height: 182, waist: 84, neck: 38, gender: "male" };
    const userData2 = { height: 167, waist: 78, neck: 34, gender: "female" };

    expect(calcBFP(userData1)).toEqual(14.8);
    expect(calcBFP(userData2)).toEqual(24.7);
  });
});

describe("FFMI (Normalized) => Fat-Free Mass Index", () => {
  it("should calculate the FFMI", () => {
    expect(calcFFMI({ height: 180, weight: 82 }, 18)).toEqual(20.75);
    expect(calcFFMI({ height: 157, weight: 52 }, 22)).toEqual(17.86);
  });
});

describe("BMR => Basal Metabolic Rate", () => {
  it("should calculate the BMR", () => {
    expect(calcBMR({ weight: 72 }, 22)).toEqual(1583);
    expect(calcBMR({ weight: 54 }, 28)).toEqual(1210);
  });
});

describe("TDEE => Total Daily Energy Expenditure", () => {
  it("should calculate the TDEE", () => {
    expect(calcTDEE({ multiplier: 1.55 }, 1450)).toEqual(2248);
    expect(calcTDEE({ multiplier: 1.2 }, 1625)).toEqual(1950);
  });
});
