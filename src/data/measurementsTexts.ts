type MeasurementsTextType = {
  [index: string]: {
    name:
      | "gender"
      | "bodyFat"
      | "activity"
      | "height"
      | "weight"
      | "waist"
      | "neck";
    title: string;
    min: number;
    max: number;
  }[];
};

const measurementsTexts: MeasurementsTextType = {
  english: [
    { name: "height", title: "height (cm)", min: 100, max: 220 },
    { name: "weight", title: "weight (kg)", min: 30, max: 220 },
    { name: "waist", title: "waist (cm)", min: 30, max: 220 },
    { name: "neck", title: "neck (cm)", min: 20, max: 80 },
  ],
  french: [
    { name: "height", title: "taille (cm)", min: 100, max: 220 },
    { name: "weight", title: "poids (kg)", min: 30, max: 220 },
    { name: "waist", title: "tour de taille (cm)", min: 30, max: 220 },
    { name: "neck", title: "cou (cm)", min: 20, max: 80 },
  ],
};

export default measurementsTexts;
