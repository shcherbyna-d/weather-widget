import { Action } from "redux";

export interface WeatherState {
  searchCity: string;
}

export interface ActionWithPayload<T> extends Action {
  payload: T;
}
