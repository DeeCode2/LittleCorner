import { useState, useEffect } from 'react';
import './App.scss';
import './Menu.scss';
import './Themes.scss';
import Audios from './Audios';
import CountdownTimer from './timer/CountdownTimer'

function App() {
  //menu will contain links, timer and toggle buttons to change the scene
  //audio corner will contain list of media players for each audio
  //scene will cover entire page
  //give user option to hide menu and audio corner

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'Light');
  const toggleMenu = () => {
    let menu = document.querySelector('#menu-container');
    if (menu.classList.contains('hide')) {
      menu.classList.remove('hide');
      menu.classList.add('show');
    } else {
      menu.classList.add('hide');
      menu.classList.remove('show');
    }
    //console.log(menu.classList)
  };

  //TOGGLE MODALS

  const toggleTimer = () => {
    let timer = document.getElementById('timer-container');
    if (timer.classList.contains('hide')) {
      timer.classList.remove('hide')
      timer.classList.add('show')
    } else {
      timer.classList.remove('show')
      timer.classList.add('hide')
    }
  }

  const toggleTheme = (e) => {
    if (theme == 'Light') {
      setTheme('Dark');
      // document
      //   .getElementById('toggle-btn')
      //   .setAttribute('aria-pressed', 'true');
    } else {
      setTheme('Light');
      // document
      //   .getElementById('toggle-btn')
      //   .setAttribute('aria-pressed', 'false');
    }
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  return (
    //LIGHT AND DARK THEME

    <div className='${theme}'>
      <div id='settings-container'>
        <button type='button' onClick={toggleTimer}>Timer</button>
        {/* <button type='button'>To-do</button> */}
        <button onClick={toggleTheme} id='toggle-scene'>
          <span>{theme}</span>
        </button>
      </div>

      <CountdownTimer/>

      <main className={`App ${theme} corner`}>
        <section id='scene-container'>
          {theme == 'Light' ? (
            <img src='/scenes/lc-day-cropped - Copy.png' />
          ) : (
            <img src='/scenes/lc-night-cropped - Copy.png' />
          )}
          {/* <img src='/scenes/day.jpg'/> */}
        </section>

        <section id='left-container'>
          {/* <button type='button' onClick={toggleMenu} id='toggle-menu'>MENU</button> */}

          <div id='title'>
            <h1>Little Corner</h1>
            {/* <p>Lorem ipsum sit dolor amet</p> */}
          </div>

          <Audios />
        </section>
      </main>
      <footer>
            <p>Inspired by <a href='' target='b_blank'>I Miss My Cafe</a> and <a href='https://store.steampowered.com/app/1369320/Virtual_Cottage/' target='_blank'>Virtual Cottage</a> </p>
      </footer>
    </div>
  );
}

export default App;
