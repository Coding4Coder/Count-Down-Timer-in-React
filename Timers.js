
import { useState, useEffect } from "react";
import "../scss/clock.scss";
import Clock from "./Clock";

const Timers = () => {

        const[timerDay, SetTimerDay] = useState();
        const[timerHours, SetTimerHours] = useState();
        const[timerMinutes, SetTimerMinutes] = useState();
        const[timerSeconds, SetTimerSeconds] = useState();

        // define timers
        
        let interval;
        const startTimer = () =>{
            const countDownDate = new Date("March 10, 2022"). getTime();
            interval = setInterval(()=> {
                const now = new Date().getTime();
               
                let distance = countDownDate - now;

                const showDays = Math.floor(distance / (24 * 60 * 60 * 1000));
                const showHrs = Math.floor(distance % (24 * 60 * 60 * 1000) / (1000 * 60 * 60));
                const showMins = Math.floor(distance % (60 * 60 * 1000) / (1000 * 60));
                const showSec = Math.floor(distance % ( 60 * 1000) / (1000));
                
                // set timer 

                if (startTimer < 0 ){
                    // stop timer
                    clearInterval(interval.current);
                } 
                else{
                    // update timer
                    SetTimerDay(showDays);
                    SetTimerHours(showHrs);
                    SetTimerMinutes(showMins);
                    SetTimerSeconds(showSec);
                }

                 // set timer end
            })
        }

useEffect(()=>{
    startTimer();
});

    return (
        <Clock 
                myDay={timerDay}
                myHr={timerHours}
                myMin={timerMinutes}
                mySec={timerSeconds}
        />
    );
}

export default Timers;