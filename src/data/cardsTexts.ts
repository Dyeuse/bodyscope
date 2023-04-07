type CardsTextsType = {
  [index: string]: {
    id: string;
    title1: string;
    title2: string;
    definition: string;
    position: string;
    info: string;
  }[];
};

const cardsTexts: CardsTextsType = {
  english: [
    {
      id: "BMI",
      title1: "BMI",
      title2: "Acronym",
      definition: "Body Mass Index",
      position: "1",
      info: "https://en.wikipedia.org/wiki/Body_mass_index",
    },
    {
      id: "BFP",
      title1: "BFP",
      title2: "Acronym",
      definition: "Body Fat Percentage",
      position: "2",
      info: "https://en.wikipedia.org/wiki/Body_fat_percentage",
    },
    {
      id: "FFMI",
      title1: "FFMI",
      title2: "Acronym",
      definition: "Fat Free Mass Index (ajusted)",
      position: "3",
      info: "https://egym.com/us/blog/fat-free-mass-index-ffmi",
    },
    {
      id: "BMR",
      title1: "BMR",
      title2: "Acronym",
      definition: "Basal Metabolic Rate",
      position: "4",
      info: "https://en.wikipedia.org/wiki/Basal_metabolic_rate",
    },
    {
      id: "TDEE",
      title1: "TDEE",
      title2: "Acronym",
      definition: "Total Daily Energy Expenditure",
      position: "5",
      info: "https://www.k-state.edu/paccats/Contents/PA/PDF/Physical%20Activity%20and%20Controlling%20Weight.pdf",
    },
  ],
  french: [
    {
      id: "BMI",
      title1: "IMC",
      title2: "Sigle",
      definition: "Indice de Masse Corporelle",
      position: "1",
      info: "https://fr.wikipedia.org/wiki/Indice_de_masse_corporelle",
    },
    {
      id: "BFP",
      title1: "IMG",
      title2: "Sigle",
      definition: "Indice de Masse Grâce",
      position: "2",
      info: "https://fr.wikipedia.org/wiki/Indice_de_masse_grasse",
    },
    {
      id: "FFMI",
      title1: "IMM",
      title2: "Sigle",
      definition: "Indice de Masse Maigre (ajusté)",
      position: "3",
      info: "https://egym.com/us/blog/fat-free-mass-index-ffmi",
    },
    {
      id: "BMR",
      title1: "MB",
      title2: "Sigle",
      definition: "Métabolisme Basal",
      position: "4",
      info: "https://fr.wikipedia.org/wiki/M%C3%A9tabolisme_de_base",
    },
    {
      id: "TDEE",
      title1: "DEJ",
      title2: "Sigle",
      definition: "Dépense Énergétique Journalière",
      position: "5",
      info: "https://www.k-state.edu/paccats/Contents/PA/PDF/Physical%20Activity%20and%20Controlling%20Weight.pdf",
    },
  ],
};

export default cardsTexts;
