import React from "react";
import '../Modals.scss';

export default function Timer({
    //pass units and the functions that change them as props
    milliseconds,
    seconds,
    minutes,
    hours,
    changeSeconds,
    changeMinutes,
    changeHours,
}) {
    return (
        <div>
            <div id="input-wrapper">
                <div className="time-input">
                    <label>Hr</label>
                    <input type="number" value={hours} onChange={changeHours}/>
                </div>

                <div className="time-input">
                    <label>Min</label>
                    <input type="number" max="59" value={minutes} onChange={changeMinutes}/> 
                </div>
                

                <div className="time-input">
                    <label>Sec</label>
                    <input type="number" max="59" value={seconds} onChange={changeSeconds}/>
                </div>

                {/* <div className="time-input">
                    <label>ms</label>
                    <input value={milliseconds} />
                </div> */}
            </div>

            

            
        </div>
    )
}