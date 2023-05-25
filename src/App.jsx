import { useState } from 'react'
import './App.scss'

function App() {

  //menu will contain links, timer and toggle buttons to change the scene
  //audio corner will contain list of media players for each audio
  //scene will cover entire page
  //give user option to hide menu and audio corner
  return (
    <>
      <div id='nav-container'>
        <nav>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Credits</a></li>
          </ul>

          <div id='scene-toggle'></div>

          <div id='timer-container'></div>
        </nav>
        <button type='button'>MENU</button>
      </div>

      <main>
        <div>
          <h1>Little<br/> Corner</h1>
          <div id="audios">
            <p>List of audio players go here</p>
          </div>
        </div>
        <div id='scene'>
          <img src="/scenes/day.jpg"/>
        </div>
      </main>
    </>
  )
}

export default App