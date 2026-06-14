import { useState } from "react";

type Props = {
  onSearch: (city: string) => void;
  isLoading: boolean;
};

export function SearchBar({ onSearch }: Props) {
  const [city, setCity] = useState("");

  return (
    <div>
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Digite a cidade"
      />
      <button onClick={() => onSearch(city)}>
        Buscar
      </button>
    </div>
  );
}