import React from 'react';

const TimerInput = ({ setTargetDateTime, handleStart, background, handleBackgroundChange, handleImageUpload }) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <input 
        type="datetime-local" 
        onChange={(e) => setTargetDateTime(e.target.value)} 
        className="p-2 border rounded-xl text-center"
      />
      <button onClick={handleStart} className="px-4 py-2 bg-green-500 text-white rounded-xl">
        Start Timer
      </button>
      <input 
        type="color" 
        value={background} 
        onChange={handleBackgroundChange} 
        className="p-2 border rounded-xl cursor-pointer"
        title="Choose Background Color"
      />
      <input 
        type="file" 
        accept="image/*" 
        onChange={handleImageUpload} 
        className="p-2 border rounded-xl cursor-pointer"
        title="Upload Background Image"
      />
    </div>
  );
};

export default TimerInput;
