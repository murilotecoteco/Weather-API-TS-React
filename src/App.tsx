
{/* Imports */}


import { useState, useCallback } from 'react';
import type { WeatherData, WeatherError } from "./types/weather";
import { SearchBar } from './components/SearchBar';
import { WeatherCard } from './components/WeatherCard';
import { LoadingState } from './components/LoadingState';
import { ErrorMessage } from './components/ErrorMessage';
import './index.css';

import { getWeatherTheme, DEFAULT_THEME } from "./utils/weatherTheme";
import type { WeatherTheme } from "./utils/weatherTheme";

function App() {
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<WeatherError | null>(null);
  const [theme, setTheme] = useState<WeatherTheme>(DEFAULT_THEME);
  const [lastCity, setLastCity] = useState<string>('');

  const fetchWeather = useCallback(async (city: string) => {
    setLoading(true);
    setError(null);
    setData(null);
    setLastCity(city);

    try {
      const key = import.meta.env.VITE_WEATHER_API_KEY;

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${key}&units=metric&lang=pt_br`
      );

      const result = await res.json();

      if (!res.ok) {
        setError({
          message: result.message ?? 'Erro desconhecido',
          type: res.status === 404 ? 'not_found' : 'unknown',
        });
        return;
      }

      setData(result);
      setTheme(getWeatherTheme(result.weather[0].main));

    } catch {
      setError({
        message: 'Falha na requisição',
        type: 'network',
      });
    } finally {
      setLoading(false);
    }
  }, []);

  const handleRetry = () => {
    if (lastCity) fetchWeather(lastCity);
  };

  const showEmpty = !data && !loading && !error;

  return (
    <div
      className="app"
      style={{
        background: theme.gradient,
        '--text-primary': theme.textPrimary,
        '--text-secondary': theme.textSecondary,
        '--glass': theme.glassColor,
        '--accent': theme.accentColor,
        '--accent-rgb': theme.accentRgb,
      } as React.CSSProperties}
    >
      {/* overlays visuais */}
      <div className="noise-overlay" aria-hidden="true" />
      <div className="blob blob-a" aria-hidden="true" />
      <div className="blob blob-b" aria-hidden="true" />

      <main className="main-content">

        {/* HEADER */}
        <header className="app-header">
          <div className="app-logo">
            <span className="logo-mark">◎</span>
            <span className="logo-name">Aether</span>
          </div>
          <p className="app-tagline">Clima em tempo real</p>
        </header>

        {/* SEARCH */}
        <SearchBar onSearch={fetchWeather} isLoading={loading} />

        {/* CONTENT */}
        <section className="content-area">

          {loading && <LoadingState />}

          {error && !loading && (
            <ErrorMessage error={error} onRetry={handleRetry} />
          )}

          {data && !loading && !error && (
            <WeatherCard data={data} theme={theme} />
          )}

          {showEmpty && (
            <div className="empty-state">
              <div className="empty-orb">🌍</div>
              <h3 className="empty-title">Descubra o clima</h3>
              <p className="empty-sub">
                Digite o nome de uma cidade para começar
              </p>
            </div>
          )}

        </section>

        {/* FOOTER */}
        <footer className="app-footer">
          <span>Dados fornecidos por OpenWeather</span>
        </footer>

      </main>
    </div>
  );
}

export default App;
