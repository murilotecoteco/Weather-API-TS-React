export type WeatherTheme = {
  gradient: string;
  textPrimary: string;
  textSecondary: string;
  glassColor: string;
  accentColor: string;
  accentRgb: string;
  icon: string;
};

export function getWeatherTheme(condition: string): WeatherTheme {
  switch (condition) {
    case "Clear":
      return {
        gradient: "linear-gradient(135deg, #facc15, #fb923c)",
        textPrimary: "#0f172a",
        textSecondary: "#1f2937",
        glassColor: "rgba(255,255,255,0.25)",
        accentColor: "#f59e0b",
        accentRgb: "245, 158, 11",
        icon: "☀️",
      };

    case "Clouds":
      return {
        gradient: "linear-gradient(135deg, #64748b, #334155)",
        textPrimary: "#ffffff",
        textSecondary: "#cbd5e1",
        glassColor: "rgba(255,255,255,0.1)",
        accentColor: "#94a3b8",
        accentRgb: "148, 163, 184",
        icon: "☁️",
      };

    case "Rain":
      return {
        gradient: "linear-gradient(135deg, #2563eb, #0f172a)",
        textPrimary: "#ffffff",
        textSecondary: "#93c5fd",
        glassColor: "rgba(255,255,255,0.1)",
        accentColor: "#3b82f6",
        accentRgb: "59, 130, 246",
        icon: "🌧️",
      };

    default:
      return {
        gradient: "linear-gradient(135deg, #1e293b, #0f172a)",
        textPrimary: "#ffffff",
        textSecondary: "#cbd5e1",
        glassColor: "rgba(255,255,255,0.1)",
        accentColor: "#38bdf8",
        accentRgb: "56, 189, 248",
        icon: "🌡️",
      };
  }
}
export const DEFAULT_THEME: WeatherTheme = {
  gradient: "linear-gradient(135deg, #1e293b, #0f172a)",
  textPrimary: "#ffffff",
  textSecondary: "#cbd5e1",
  glassColor: "rgba(255,255,255,0.1)",
  accentColor: "#38bdf8",
  accentRgb: "56, 189, 248",
  icon: "🌡️",
};