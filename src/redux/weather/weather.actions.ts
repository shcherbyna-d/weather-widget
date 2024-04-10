export function setCity(cityName: string) {
  return {
    type: "weather/set_city",
    payload: cityName,
  };
}
