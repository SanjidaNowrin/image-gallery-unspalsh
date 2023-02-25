import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Images from "./Components/Images/Images";
import { useState } from "react";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState("");
  // search value
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <Navbar
        setDarkMode={setDarkMode}
        darkMode={darkMode}
        handleSearch={handleSearch}
      />
      <Banner handleSearch={handleSearch} />
      <Images darkMode={darkMode} search={search} />
    </div>
  );
}

export default App;
