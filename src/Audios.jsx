import './Audios.scss';

const Audios = () => {
    
    const sounds = [
        {
            name: 'Heavy Rain',
            audio: 'audios/243628__lebaston100__heavy-rain.wav'
        },
        {
            name: 'Sunny Day',
            audio: 'audios/163997__danieldouch__backyard-nature.wav'
        },
        {
            name: 'Peaceful Night',
            audio: 'audios/352514__inspectorj__ambience-night-wildlife-a.wav'
        },
        {
            name: 'Bustling City',
            audio: 'audios/424404__g_m_d_three__canal_street_new_york_a011.wav'
        },
        {
            name: 'Cozy Fireplace',
            audio: 'audios/18766__reinsamba__chimney-fire.wav'
        },
    ];

    const toggleAudio = (e) => {
        let player = e.target.parentElement.parentElement.children[1]
        if (player.paused == true) {
            player.play();
            e.target.innerHTML = "\u23F8";
        } else {
            player.pause();
            e.target.innerHTML = "\u23F5"
        }
    }

    const audioPlayers = sounds.map((sound) => {
        return (
            <div className="audio-player">
                <label for='sound-name'>{sound.name}</label>
                <audio loop src={sound.audio}></audio>
                <div className="controls">
                    <button type='button' className="play-btn" onClick={toggleAudio}>&#x23F5;</button>
                    <input type="range" id='sound-name' name='sound-name' className="volume-slider" defaultValue={80} onChange={e => {
                        e.target.parentElement.parentElement.children[1].volume = e.target.value / 100;
                    }}></input>    
                </div>
                
            </div>
            
        )
    })
    return (
        <div id="audio-container">
            {audioPlayers}
        </div>
    )
}




export default Audios;