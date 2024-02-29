import React from 'react';
import { GAME_STATE_PLAYING } from '../constant';

const Footer = ({ onNewGameClick, onSuggestClick, gameState }) => {
    const renderButton = () => {
        if(gameState === GAME_STATE_PLAYING){
            return <button onClick={onSuggestClick}>Suggest </button>;
        }
        return <button onClick={onNewGameClick}> New Game</button>;
    }
  return (
    <div className='panel footer'>
        {/* {
            gameState === GAME_STATE_PLAYING &&
            <button onClick={onSuggestClick}>Suggest </button>
        }
        {
            gameState !== GAME_STATE_PLAYING &&
            <button onClick={onNewGameClick}> New Game</button>
        } */}

        {renderButton()}
    </div>
  )
}

export default Footer;