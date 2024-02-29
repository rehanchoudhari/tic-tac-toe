import React from 'react';
import { 
    GAME_STATE_DRAW,
    GAME_STATE_PLAYING,
    GAME_STATE_WINNER
} from '../constant';

const Header = ({currentPlayer, winPlayer, gameState}) => {
    const renderLable = () =>{
        switch (gameState){
            case GAME_STATE_PLAYING:
                return `Player ${currentPlayer} Trun`;
            case GAME_STATE_WINNER:
                return `Player ${winPlayer} Wins`;
            case GAME_STATE_DRAW:
                return `Game is a Draw!`;
            default:
        }
    }
    return (
    <div className='panel header'>
        <div className='header-text'>{renderLable()}</div>
    </div>
  )
}

export default Header;