type PositiveInteger<T extends number> = `${T}` extends `-${number}`
  ? never
  : T;

// Customized rounding function

export function round<T extends number>(
  nb: number,
  place: PositiveInteger<T> | 0 = 0
) {
  return Math.round(nb * 10 ** place) / 10 ** place;
}

// Range checker functions

export function isInRange(value: number, min: number, max: number) {
  if (min > max) {
    throw new Error("Min must be smaller than max");
  }
  return value >= min && value <= max;
}

export function isInHeightRange(value: number) {
  return isInRange(value, 100, 220); // Same range as Measurements component
}

export function isInWeightRange(value: number) {
  return isInRange(value, 30, 220); // Same range as Measurements component
}

export function isInWaistRange(value: number) {
  return isInRange(value, 30, 220); // Same range as Measurements component
}

export function isInNeckRange(value: number) {
  return isInRange(value, 20, 80); // Same range as Measurements component
}

// BMI => Body Mass Index

export function calcBMI(height: number, weight: number) {
  const BMI = weight / (height / 100) ** 2;
  return round(BMI, 1);
}

// BFP => Body Fat Percentage

/* A novel body circumferences-based estimation of percentage body fat - Published online by Cambridge University Press:  19 March 2018 */

type BFPType = {
  height: number;
  waist: number;
  neck: number;
};

function calcMaleBFP({ height, waist, neck }: BFPType) {
  const BFP = 10.111 - 0.239 * height + 0.808 * waist - 0.518 * neck;
  return round(BFP, 2);
}

function calcFemaleBFP({ height, waist, neck }: BFPType) {
  const BFP = 19.197 - 0.239 * height + 0.808 * waist - 0.518 * neck;
  return round(BFP, 2);
}

export function calcBFP<T extends BFPType & { gender: string }>(
  personalData: T
) {
  return personalData.gender === "mal"
    ? calcMaleBFP(personalData)
    : calcFemaleBFP(personalData);
}

// FFMI (Normalized) => Fat-Free Mass Index

function calcFatFreeMass(weight: number, BFP: number) {
  const fatFreeMass = weight * (1 - BFP / 100);
  return round(fatFreeMass, 2);
}

function calcBasicFFMI(
  { height, weight }: { height: number; weight: number },
  BFP: number
) {
  const FFMI = calcFatFreeMass(weight, BFP) / (height / 100) ** 2;
  return round(FFMI, 2);
}

export function calcFFMI(
  measurements: { height: number; weight: number },
  BFP: number
) {
  // Normalized
  const FFMI =
    calcBasicFFMI(measurements, BFP) + 6.1 * (1.8 - measurements.height / 100);
  return round(FFMI, 2);
}

// BMR => Basal Metabolic Rate

// Katch–McArdle formula (resting daily energy expenditure)

export function calcBMR(weight: number, BFP: number) {
  const BMR = 370 + 21.6 * calcFatFreeMass(weight, BFP);
  return round(BMR);
}

// TDEE => Total Daily Energy Expenditure

/*
  "sedentary": 1.2 ,
  "lightly active": 1.375,
  "moderately active": 1.55,
  "very active": 1.725,
  "extremely active": 1.9,

  scr: Kansas State University
*/

export function calcTDEE(multiplier: number, BMR: number) {
  const TDEE = BMR * multiplier;
  return round(TDEE);
}
