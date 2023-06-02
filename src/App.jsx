import { useState, useEffect } from "react";
import "./App.scss";
import "./Menu.scss";
import "./Themes.scss";
import Audios from "./Audios";

function App() {
  //menu will contain links, timer and toggle buttons to change the scene
  //audio corner will contain list of media players for each audio
  //scene will cover entire page
  //give user option to hide menu and audio corner

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const toggleMenu = () => {
    let menu = document.querySelector("#menu-container");
    if (menu.classList.contains("hide")) {
      menu.classList.remove("hide");
      menu.classList.add("show");
    } else {
      menu.classList.add("hide");
      menu.classList.remove("show");
    }
    //console.log(menu.classList)
  };

  const toggleTheme = (e) => {
    if (theme == "light") {
      setTheme("dark");
      // document
      //   .getElementById("toggle-btn")
      //   .setAttribute("aria-pressed", "true");
    } else {
      setTheme("light");
      // document
      //   .getElementById("toggle-btn")
      //   .setAttribute("aria-pressed", "false");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  return (
    //LIGHT AND DARK THEME

    <>
      <div id="settings-container">
        <button type="button">Timer</button>
        <button type="button">To-do</button>
        <button onClick={toggleTheme} id="toggle-scene">
          <span>{theme.toUpperCase()}</span>
        </button>
      </div>

      <main className={`App ${theme} corner`}>
        <section id="scene-container">
          {theme == "light" ? (
            <img src="/scenes/lc-day-cropped.png" />
          ) : (
            <img src="/scenes/lc-night-cropped.png" />
          )}
          {/* <img src="/scenes/day.jpg"/> */}
        </section>

        <section id="left-container">
          {/* <button type='button' onClick={toggleMenu} id='toggle-menu'>MENU</button> */}

          <div id="title">
            <h1>Little Corner</h1>
            <p>Lorem ipsum sit dolor amet</p>
          </div>

          <Audios />
        </section>
      </main>
    </>
  );
}

export default App;
