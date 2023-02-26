import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Images from "./Components/Images/Images";
import { createContext, useState } from "react";
export const THEME_CONTEXT = createContext();
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState("");
  // search value
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
  };

  const value = { darkMode, setDarkMode, handleSearch, search };
  return (
    <THEME_CONTEXT.Provider value={value}>
      <div className={darkMode ? "dark-mode" : "light-mode"}>
        <Navbar />
        <Banner />
        <Images />
      </div>
    </THEME_CONTEXT.Provider>
  );
}

export default App;
