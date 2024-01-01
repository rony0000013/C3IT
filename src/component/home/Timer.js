import React, { useState } from 'react'

const Timer = () => {
    const[day, setDay]=useState();
    const[hour, setHour]=useState();
    const[min, setMin]=useState();
    const[sec, setSec]=useState();
    const finalTime = new Date("August 19, 2023 8:00:00");
    setInterval(() => {
        const now=new Date();
        const t=new Date(finalTime-now);
        setSec(t.getSeconds())
        setMin(t.getMinutes())
        setHour(t.getHours())
        setDay(parseInt(t.getTime()/(1000*60*60*24)))
        
    }, 1000);
    
    
  return (
    <div className='Timer'>
      <div className="circle">
      <span>
        <span className='FM1'>{day}</span>
        <br />
        <span className="FM3">Days</span>
        </span>
      </div>
      <div className="circle">
      <span>
        <span className='FM1'>{hour}</span>
        <br />
        <span className="FM3">Hours</span>
        </span>
      </div>
      <div className="circle">
      <span>
        <span className='FM1'>{min}</span>
        <br />
        <span className="FM3">Mins</span>
        </span>
      </div>
      <div className="circle">
      <span>
        <span className='FM1'>{sec}</span>
        <br />
        <span className="FM3">Secs</span>
        </span>
      </div>
    </div>
  )
}

export default Timer
