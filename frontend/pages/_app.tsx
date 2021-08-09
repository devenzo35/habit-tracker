import { createContext, useState } from "react";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";

export const habitsContext = createContext({});

function MyApp({ Component, pageProps }) {
  const [completedHabits, setCompletedHabits] = useState([]);

  return (
    <habitsContext.Provider value={{ completedHabits, setCompletedHabits }}>
      <Component {...pageProps} />
    </habitsContext.Provider>
  );
}

export default MyApp;
