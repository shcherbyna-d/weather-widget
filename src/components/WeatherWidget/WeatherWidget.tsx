import styled from "styled-components";
import { useSelector } from "react-redux";
import { getSearchCity } from "../../redux/weather/weather.selectors";
import { useWeatherByCity } from "../../api/weather";
import SearchBar from "../SearchBar/SearchBar";
import WeatherCard from "../WeatherCard/WeatherCard";

const Header = styled.header`
  display: flex;
  height: 60px;
`;

const Main = styled.main`
  background-color: #f5f5f5;
  height: calc(100vh - 60px);
`;

const WeatherWidget = () => {
  const city = useSelector(getSearchCity);
  const { data: weatherData, error, isLoading } = useWeatherByCity(city);

  //may be in the utils in the big project
  const getFormatedDate = (): string => {
    const date = new Date();
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString();
    return `${day}.${month}.${year}`;
  };

  return (
    <div>
      <Header>
        <SearchBar />
      </Header>
      <Main>
        {isLoading && <h2>...Loading</h2>}
        {error && <h2>{error.message}</h2>}
        {weatherData && !error && (
          <WeatherCard
            icon={weatherData.weather[0].icon}
            temperature={weatherData.main.temp}
            wind={weatherData.wind.speed}
            windDirection={weatherData.wind.deg}
            pressure={weatherData.main.pressure}
            humidity={weatherData.main.humidity}
            lastUpdated={getFormatedDate()}
          />
        )}
      </Main>
    </div>
  );
};

export default WeatherWidget;
