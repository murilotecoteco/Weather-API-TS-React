# 🌤️ Weather API — React + TypeScript

Aplicação de clima em tempo real desenvolvida com **React, TypeScript e Vite**, consumindo a API da OpenWeather.  
O projeto possui interface moderna com design glassmorphism, tema dinâmico baseado no clima e tratamento de estados de carregamento e erro.

---

## Site publicado

👉 https://weather-api-ts-react.vercel.app/

---

##  Preview

<img width="1917" height="912" alt="AetherV1" src="https://github.com/user-attachments/assets/cca8ae3b-c2e9-4887-9339-1245f659e885" />

---

##  Funcionalidades

-  Busca de cidades em tempo real
-  Integração com OpenWeather API
-  Tema dinâmico baseado nas condições climáticas
-  Loading state com feedback visual
-  Tratamento de erros (cidade não encontrada / falha de rede)
-  Interface responsiva
-  UI moderna com glassmorphism e animações suaves

---

##  Tecnologias utilizadas

- React
- TypeScript
- Vite
- CSS puro
- OpenWeather API

---

##  Estrutura do projeto

src/
 ├── components/
 │    ├── SearchBar.tsx
 │    ├── WeatherCard.tsx
 │    ├── LoadingState.tsx
 │    └── ErrorMessage.tsx
 ├── types/
 │    └── weather.ts
 ├── utils/
 │    └── weatherTheme.ts
 ├── App.tsx
 ├── main.tsx
 └── index.css

---

##  Como rodar localmente

git clone https://github.com/seu-usuario/weather-api-ts-react.git
cd weather-api-ts-react
npm install
npm run dev

---

##  Configuração da API

Crie um arquivo `.env` na raiz do projeto:

VITE_WEATHER_API_KEY=sua_api_key_aqui

---

##  Aprendizados

- Consumo de APIs REST
- React com TypeScript
- Manipulação de estados
- Componentização
- UI moderna com CSS puro
- Sistema de tema dinâmico

---

##  Próximas melhorias

- Adicionar histórico de buscas
- Implementar geolocalização
- Melhorar animações
- Migrar para Next.js
- Modo dark/light manual

---
