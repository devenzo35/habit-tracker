import { createContext, useState } from "react";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import React from "react";

export const habitsContext = createContext(null);

interface HabitsState {
  completed: [];
  pending: [];
}

function MyApp({ Component, pageProps }) {
  const [habits, setHabits] = useState<HabitsState>({
    completed: [],
    pending: [],
  });

  return (
    <habitsContext.Provider value={{ habits, setHabits }}>
      <Component {...pageProps} />
    </habitsContext.Provider>
  );
}

export default MyApp;
