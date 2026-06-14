import type { WeatherData } from "../types/weather";
import type { WeatherTheme } from "../utils/weatherTheme";

type Props = {
  data: WeatherData;
  theme: WeatherTheme;
};

export function WeatherCard({ data, theme }: Props) {
  return (
    <div className="weather-card">
      <div style={{ color: theme.textPrimary }}>
        {theme.icon} {data.name}
      </div>

      <p>{data.weather[0].description}</p>
      <p>{data.main.temp}°C</p>
    </div>
  );
}