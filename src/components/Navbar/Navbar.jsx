import { useState } from "react";
import {
  FaHome,
  FaChartLine,
  FaStar,
  FaLightbulb,
  FaMoon,
} from "react-icons/fa";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <>
      <div className={`navbar ${darkMode ? "navbar--dark" : "navbar--light"}`}>
        <nav className="navbar__icons">
          <ul>
            <li>
              <a href="">
                <FaHome />
              </a>
            </li>
            <li>
              <a href="">
                <FaChartLine />
              </a>
            </li>
            <li>
              <a href="">
                <FaStar />
              </a>
            </li>
          </ul>
        </nav>
        <button onClick={toggleDarkMode}>
          {darkMode ? <FaLightbulb /> : <FaMoon />}
        </button>
      </div>
    </>
  );
}
