import React from 'react';
import image from "./1.png"

const TimerInput = ({ setTargetDateTime, handleStart, background, handleBackgroundChange, handleImageUpload }) => {
  return (
    <div className="flex  flex-col items-center space-y-4" style={{background:{image}}}>
      <input 
        type="datetime-local" 
        onChange={(e) => setTargetDateTime(e.target.value)} 
        className="p-2 border rounded-xl text-center"
      />
      <button onClick={handleStart} className="px-4 py-2 bg-green-500 text-white rounded-xl">
        Start Timer
      </button>
      
    </div>
  );
};

export default TimerInput;
