type CardsTextsType = {
  [index: string]: {
    id: string;
    title1: string;
    title2: string;
    definition: string;
    position: string;
  }[];
};

const cardsTexts: CardsTextsType = {
  english: [
    {
      id: "BMI",
      title1: "BMI",
      title2: "Stand for",
      definition: "Body Mass Index",
      position: "1",
    },
    {
      id: "BFP",
      title1: "BFP",
      title2: "Stand for",
      definition: "Body Fat Percentage",
      position: "2",
    },
    {
      id: "FFMI",
      title1: "FFMI",
      title2: "Stand for",
      definition: "Fat Free Mass Index (ajusted)",
      position: "3",
    },
    {
      id: "BMR",
      title1: "BMR",
      title2: "Stand for",
      definition: "Basal Metabolic Rate",
      position: "4",
    },
    {
      id: "TDEE",
      title1: "TDEE",
      title2: "Stand for",
      definition: "Total Daily Energy Expenditure",
      position: "5",
    },
  ],
  french: [
    {
      id: "BMI",
      title1: "IMC",
      title2: "Sigle pour",
      definition: "Indice de Masse Corporelle",
      position: "1",
    },
    {
      id: "BFP",
      title1: "TMG",
      title2: "Sigle pour",
      definition: "Taux de Masse Grâce",
      position: "2",
    },
    {
      id: "FFMI",
      title1: "IMM",
      title2: "Sigle pour",
      definition: "Indice de Masse Maigre (ajusté)",
      position: "3",
    },
    {
      id: "BMR",
      title1: "MB",
      title2: "Sigle pour",
      definition: "Métabolisme Basal",
      position: "4",
    },
    {
      id: "TDEE",
      title1: "DEJ",
      title2: "Sigle pour",
      definition: "Dépense Énergétique Journalière",
      position: "5",
    },
  ],
};

export default cardsTexts;
