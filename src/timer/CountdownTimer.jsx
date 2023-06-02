import React, { useState, useEffect } from 'react'
import Timer from './Timer';

export default function CountdownTimer() {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [milliseconds, setMilliseconds] = useState(0);

    //state to verify if the timer is running
    const [isRunning, setIsRunning] = useState(null);

    //indicate when time is up
    const [showEndScreen, setShowEndScreen] = useState({
        show: false,
        message: "Time's up"
    })

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval (() => {
                if (milliseconds > 0) {
                    setMilliseconds((milliseconds) => milliseconds - 1);
                } else if (seconds > 0) {
                    setSeconds((seconds) - 1);
                    setMilliseconds(99);
                } else if (minutes > 0) {
                    setMinutes((minutes) - 1);
                    setSeconds(59);
                    setMilliseconds(99);
                } else if (hours > 0) {
                    setHours((hours) - 1);
                    setMinutes(59);
                    setSeconds(59);
                    setMilliseconds(99);
                }    
            }, 10);
        }
        if (hours === 0 && minutes === 0 && seconds === 0 && milliseconds === 1) {
            setShowEndScreen({...showEndScreen, show: true});
            resetTimer();
        }
        return () => clearInterval(interval);
    }, [milliseconds, seconds, minutes, hours, isRunning, showEndScreen.show])

    //start, pause and stop functions

    //START
    function startTimer() {
        if (hours !==0 || minutes !==0 || seconds !==0 || milliseconds !==0) {
            setIsRunning(true);
            setShowEndScreen({...showEndScreen, show: false});

        } else {
            //replace window alert and instead disable start button
            window.alert('Set a time.')
        }
    }

    //PAUSE
    function pauseTimer() {
        setIsRunning(false);
    }

    //STOP
    function stopTimer() {
        resetTimer();
        setShowEndScreen({...showEndScreen, show: false});
    }

    function resetTimer() {
        setIsRunning(false);
        setMilliseconds(0);
        setSeconds(0);
        setMinutes(0);
        setHours(0);;
    }


    //handler functions
    const changeSeconds = (e) => {
        setSeconds(e.target.value)
    }
    const changeMinutes = (e) => {
        setMinutes(e.target.value)
    }
    const changeHours = (e) => {
        setHours(e.target.value)
    }

    return (
        <div id="timer-container" className='hide'>
            {/* instead of showing this text have a modal popup */}
            {/* {showEndScreen.show && (
                <h2 className='time-up'>{showEndScreen.message}</h2>
            )} */}
            <Timer
                milliseconds={milliseconds}
                seconds={seconds}
                minutes={minutes}
                hours={hours}
                changeSeconds={changeSeconds}
                changeMinutes={changeMinutes}
                changeHours={changeHours}
            />

            {/* controls */}
            <div id="timer-controls">
                {!isRunning && (
                    <button type="button" className="timer-btn" onClick={startTimer}>Play</button>
                )}
                {isRunning && (
                    <button type="button" className="timer-btn" onClick={pauseTimer}>Pause</button>
                )}
                <button className="timer-btn" onClick={stopTimer}>Stop</button>
            </div>
            
            
        </div>
    )
}