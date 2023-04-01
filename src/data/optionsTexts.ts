type RadioType = {
  name: Readonly<"language" | "gender">;
  choice1: Readonly<string>;
  value1: Readonly<string>;
  choice2: Readonly<string>;
  value2: Readonly<string>;
};

type SelectType = {
  name: Readonly<"activity" | "bodyFat">;
  title: Readonly<string>;
  options: {
    label: Readonly<string>;
    value: Readonly<string | number>;
  }[];
};

type OptionsTextsType = {
  [index: string]: {
    radios: Readonly<RadioType[]>;
    selects: Readonly<SelectType[]>;
  };
};

const optionsTexts: OptionsTextsType = {
  english: {
    radios: [
      {
        name: "language",
        choice1: "english",
        value1: "english",
        choice2: "français",
        value2: "french",
      },
      {
        name: "gender",
        choice1: "male",
        value1: "male",
        choice2: "female",
        value2: "female",
      },
    ],
    selects: [
      {
        name: "activity",
        title: "Physical activity",
        options: [
          { label: "sedentary", value: 1.2 },
          { label: "lightly active", value: 1.375 },
          { label: "moderately active", value: 1.55 },
          { label: "very active", value: 1.725 },
          { label: "extremely active", value: 1.9 },
        ],
      },
      {
        name: "bodyFat",
        title: "Body Fat Percentage",
        options: [
          { label: "auto calc", value: "auto" },
          { label: "specific", value: "specific" },
        ],
      },
    ],
  },
  french: {
    radios: [
      {
        name: "language",
        choice1: "english",
        value1: "english",
        choice2: "français",
        value2: "french",
      },
      {
        name: "gender",
        choice1: "homme",
        value1: "male",
        choice2: "femme",
        value2: "female",
      },
    ],
    selects: [
      {
        name: "activity",
        title: "Activité Physique",
        options: [
          { label: "sédentaire", value: 1.2 },
          { label: "légèrement actif", value: 1.375 },
          { label: "modérément actif", value: 1.55 },
          { label: "très actif", value: 1.725 },
          { label: "extrêmement actif", value: 1.9 },
        ],
      },
      {
        name: "bodyFat",
        title: "Pourcentage de masse grâce",
        options: [
          { label: "calc auto", value: "auto" },
          { label: "spécifique", value: "specific" },
        ],
      },
    ],
  },
};

export default optionsTexts;
