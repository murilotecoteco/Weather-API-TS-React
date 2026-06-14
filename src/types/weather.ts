export type WeatherData = {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
  }[];
};

export type WeatherError = {
  message: string;
  type: 'network' | 'not_found' | 'unknown';
};