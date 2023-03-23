import {
  createContext,
  ReactNode,
  useReducer,
  Dispatch,
  useContext,
} from "react";

type UserDataType = {
  gender: string;
  activity: string;
  bodyFat: string;
  height: number | null;
  weight: number | null;
  waist: number | null;
  neck: number | null;
};

type ActionType =
  | { type: "getGender"; gender: string }
  | { type: "getBodyFat"; bodyFat: string }
  | { type: "getActivity"; activity: string }
  | { type: "getHeight"; height: number }
  | { type: "getWeight"; weight: number }
  | { type: "getWaist"; waist: number }
  | { type: "getNeck"; neck: number };

const UserDataContext = createContext<null | UserDataType>(null);

const UserDataDispatchContext = createContext<null | Dispatch<ActionType>>(
  null
);

const initialUserData: UserDataType = {
  gender: "male",
  activity: "moderately",
  bodyFat: "auto calc",
  height: null,
  weight: null,
  waist: null,
  neck: null,
};

function userDataReducer(userData: UserDataType, action: ActionType) {
  switch (action.type) {
    case "getGender": {
      return { ...userData, gender: action.gender };
    }
    case "getBodyFat": {
      return { ...userData, bodyFat: action.bodyFat };
    }
    case "getActivity": {
      return { ...userData, activity: action.activity };
    }
    case "getHeight": {
      return { ...userData, height: action.height };
    }
    case "getWeight": {
      return { ...userData, weight: action.weight };
    }
    case "getWaist": {
      return { ...userData, waist: action.waist };
    }
    case "getNeck": {
      return { ...userData, neck: action.neck };
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
  return useContext(UserDataDispatchContext);
}
