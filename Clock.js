
import { useState, useEffect } from "react";
import "../scss/clock.scss";
const Clock = ({ myDay, myHr, myMin, mySec }) => {

       

    return (
          <div className="main-container">
             <div className="card"> 
             <h1>Count Down Timer</h1>
                <section>
                    <p>{myDay}</p>
                    <span>Days</span>
                </section>
                <section>
                    <p>{myHr}</p>
                    <span>Hrs</span>
                </section>
                <section>
                    <p>{myMin}</p>
                    <span>Mins</span>
                </section>
                <section>
                    <p>{mySec}</p>
                    <span>Secs</span>
                </section>
             </div>
         </div>
    );
}

Clock.defaultProps = {
    myDay : 10,
    myHr : 10,
    myMin : 10,
    mySec : 10
}
export default Clock;