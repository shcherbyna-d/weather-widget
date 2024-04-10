import { WeatherState, ActionWithPayload } from "./weather.types";

const initialState: WeatherState = {
  searchCity: "",
};

const weatherReducer = (
  state = initialState,
  action: ActionWithPayload<string>
): WeatherState => {
  switch (action.type) {
    case "weather/set_city":
      return {
        ...state,
        searchCity: action.payload,
      };
    default:
      return state;
  }
};

export default weatherReducer;
