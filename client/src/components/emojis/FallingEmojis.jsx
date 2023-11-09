import React, { useEffect, useState } from 'react';
import './FallingEmojis.css';

const FallingEmojis = () => {
  const [emojis, setEmojis] = useState([]);

  const randomPosition = () => {
    const randomLeft = `${Math.random() * 100}vw`;
    return {
      position: 'absolute',
      left: randomLeft,
    };
  };

  const spawnEmoji = () => {
    const emoji = ['🐶', '🐕', '🦮', '🐩', '🐾', '🐾', '🐾', '🐾', '🐾', '🐾', '🐾', '🐾', '🐾'][Math.floor(Math.random() * 13)];
    const emojiElement = (
      <div className="falling-emoji" key={emojis.length} style={randomPosition()}>
        {emoji}
      </div>
    );

    setEmojis((prevEmojis) => [...prevEmojis, emojiElement]);
  };

  useEffect(() => {
    const interval = setInterval(spawnEmoji, 300); 

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="falling-emojis">
      {emojis.map((emoji, index) => (
        <div key={index} className="falling-emoji-container">
          {emoji}
        </div>
      ))}
    </div>
  );
};

export default FallingEmojis;
