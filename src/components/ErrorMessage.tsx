import type { WeatherError } from "../types/weather";

type Props = {
  error: WeatherError;
  onRetry: () => void;
};

export function ErrorMessage({ error, onRetry }: Props) {
  return (
    <div>
      <p>{error.message}</p>
      <button onClick={onRetry}>Tentar novamente</button>
    </div>
  );
}