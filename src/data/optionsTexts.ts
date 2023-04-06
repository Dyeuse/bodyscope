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
          { label: "sedentary | desk job", value: 1.2 },
          { label: "lightly active | 1-3/week", value: 1.375 },
          { label: "moderately active | 6-7/week", value: 1.55 },
          {
            label: "very active | 2/day or hard 1/day",
            value: 1.725,
          },
          {
            label: "extra active | hard 2/day or +",
            value: 1.9,
          },
        ],
      },
      {
        name: "bodyFat",
        title: "Body Fat Percentage",
        options: [
          { label: "automatic calculation", value: "auto" },
          { label: "specific value", value: "specific" },
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
          { label: "sédentaire | travail de bureau", value: 1.2 },
          { label: "légèrement actif | 1-3/s.", value: 1.375 },
          { label: "modérément actif | 6-7/s.", value: 1.55 },
          { label: "très actif | 2/j. ou intense 1/j.", value: 1.725 },
          { label: "extra actif | intense 2/j. ou +", value: 1.9 },
        ],
      },
      {
        name: "bodyFat",
        title: "Pourcentage de masse grâce",
        options: [
          { label: "calcul automatique", value: "auto" },
          { label: "valeur spécifique", value: "specific" },
        ],
      },
    ],
  },
};

export default optionsTexts;
