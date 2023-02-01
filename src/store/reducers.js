import { ADD_APP, DELETE_APP, UPDATE_APP } from "./actions";

const initialState = {
  appList: [
    {
      id: "0",
      name: "Esercizio 1",
      description: "Che allenamento vuoi fare?",
    },
    {
      id: "1",
      name: "Esercizio 2",
      description: "Che allenamento vuoi fare?",
    },
    {
      id: "2",
      name: "Esercizio 3",
      description: "Che allenamento vuoi fare?",
    },
  ],
};

export function rootReducer(state = initialState, action) {
  if (action.type === ADD_APP) {
    const newApp = {
      id: state.todoApp.length.toString(),
      ...action.payload,
    };

    return { ...state, appList: [...state.appList, newApp] };
  }
  if (action.type === UPDATE_APP) {
    return {
      ...state,
      appList: state.appList.map((app) => {
        return app.id === action.payload.id ? action.payload : app;
      }),
    };
  }
  if (action.type === DELETE_APP) {
    return {
      ...state,
      appList: state.appList.filter((item) => item.id !== action.payload),
    };
  }

  return state;
}