import React, { useState, useEffect } from 'react';
import TimerInput from './TimerInput';
import TimerDisplay from './TimerDisplay';

const Timer = () => {
  const [targetDateTime, setTargetDateTime] = useState('');
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [background, setBackground] = useState('#ffffff');
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = new Date(targetDateTime).getTime() - now;

        if (distance <= 0) {
          clearInterval(interval);
          setTimeLeft(0);
        } else {
          setTimeLeft(distance);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, targetDateTime]);

  const handleBackgroundChange = (e) => {
    setBackground(e.target.value);
    setBackgroundImage('');
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBackgroundImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  return (
    <div 
      style={{
        backgroundColor: background, 
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        fontFamily: 'Space Mono, monospace'
      }}
    >
      <TimerDisplay timeLeft={timeLeft} />
      {!isRunning && (
        <TimerInput 
          setTargetDateTime={setTargetDateTime} 
          handleStart={handleStart} 
          background={background} 
          handleBackgroundChange={handleBackgroundChange} 
          handleImageUpload={handleImageUpload} 
        />
      )}
    </div>
  );
};

export default Timer;
