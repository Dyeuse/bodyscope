import {
  createContext,
  ReactNode,
  useReducer,
  Dispatch,
  useContext,
} from "react";
import { results } from "../utils/formulas";

type UserDataType = {
  language: string;
  gender: string;
  activity: string;
  bodyFat: string;
  specificBF: string;
  height: string;
  weight: string;
  waist: string;
  neck: string;
  results: {
    BMI: string | number;
    BFP: string | number;
    FFMI: string | number;
    BMR: string | number;
    TDEE: string | number;
    [index: string]: string | number;
  };
  [index: string]: string | object;
};

type ActionType = {
  type:
    | "language"
    | "gender"
    | "bodyFat"
    | "specificBF"
    | "activity"
    | "height"
    | "weight"
    | "waist"
    | "neck"
    | "calculate";
  [index: string]: string;
};

const initialUserData: UserDataType = {
  language: "english",
  gender: "male",
  activity: "1.55",
  bodyFat: "auto",
  specificBF: "",
  height: "",
  weight: "",
  waist: "",
  neck: "",
  results: {
    BMI: "---",
    BFP: "---",
    FFMI: "---",
    BMR: "---",
    TDEE: "---",
  },
};

const UserDataContext = createContext(initialUserData);

const UserDataDispatchContext = createContext<null | Dispatch<ActionType>>(
  null
);

function userDataReducer(userData: UserDataType, action: ActionType) {
  switch (action.type) {
    case "language": {
      return { ...userData, language: action.language };
    }
    case "gender": {
      return { ...userData, gender: action.gender };
    }
    case "bodyFat": {
      return { ...userData, bodyFat: action.bodyFat };
    }
    case "specificBF": {
      return { ...userData, specificBF: action.specificBF };
    }
    case "activity": {
      return { ...userData, activity: action.activity };
    }
    case "height": {
      return { ...userData, height: action.height };
    }
    case "weight": {
      return { ...userData, weight: action.weight };
    }
    case "waist": {
      return { ...userData, waist: action.waist };
    }
    case "neck": {
      return { ...userData, neck: action.neck };
    }
    case "calculate": {
      const allResults = results(userData);
      return { ...userData, results: { ...allResults } };
    }
    default: {
      return userData;
    }
  }
}

export function UserDataProvider({ children }: { children: ReactNode }) {
  const [userData, dispatch] = useReducer(userDataReducer, initialUserData);

  return (
    <UserDataContext.Provider value={userData}>
      <UserDataDispatchContext.Provider value={dispatch}>
        {children}
      </UserDataDispatchContext.Provider>
    </UserDataContext.Provider>
  );
}

export function useUserData() {
  return useContext(UserDataContext);
}

export function useUserDataDispatch() {
  const context = useContext(UserDataDispatchContext);
  if (!context) {
    throw new Error("useUserDataDispatch must not be null");
  }
  return context;
}
