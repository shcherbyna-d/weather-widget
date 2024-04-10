import { RootState } from "../store";

export const getSearchCity = (state: RootState): string => {
  return state.weather?.searchCity;
};
