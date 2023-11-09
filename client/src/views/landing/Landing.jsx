import React from 'react';
import FallingEmojis from '../../components/emojis/FallingEmojis';
import { Link } from 'react-router-dom';

import './landing.css'

function LandingPage() {
  return (
    <div className="landing-page">
      <FallingEmojis />
      <Link className='button' to="/home">Enter Page</Link>
    </div>
  );
}

export default LandingPage;