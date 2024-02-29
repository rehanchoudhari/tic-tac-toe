import React, { useEffect, useState } from 'react'
import GameCircle from './GameCircle';
import '../Game.css';
import Header from './Header';
import Footer from './Footer';
import { isWinner, isDraw, getComputerMove } from '../helper';

import { 
    GAME_STATE_PLAYING,
    GAME_STATE_WINNER, 
    Player_0, Player_1, 
    No_Circle, Player_2, GAME_STATE_DRAW 
} from '../constant';


const GameBoard = () => {
    const [board, setBoard] = useState(Array(16).fill(Player_0));
    const [currentPlayer, setCurrentPlayer] = useState(Player_1);
    const [gameState, setGameState] = useState(GAME_STATE_PLAYING);
    const [winPlayer, setWinPlayer] = useState(currentPlayer);

    useEffect(() =>{
        initGame();
    }, []);
    
    const initGame = () => {
        setBoard(Array(16).fill(Player_0));
        setCurrentPlayer(Player_1);
        setGameState(GAME_STATE_PLAYING);
    }

    const suggestMove = () => {
        CircleClicked(getComputerMove(board));
    }

    const initBoard = () => {
        const circles = [];
        for(let i=0; i<No_Circle; i++){
            circles.push(renderCircle(i));
        }
        return circles;
    }

    const CircleClicked = (id) => {
        console.log(id);

        if(board[id] !== Player_0) return;
        if(gameState !== GAME_STATE_PLAYING) return;

        if(isWinner(board, id, currentPlayer)){
            setGameState(GAME_STATE_WINNER);
            setWinPlayer(currentPlayer);
        }

        if(isDraw(board, id, currentPlayer)){
            setGameState(GAME_STATE_DRAW);
            setWinPlayer(Player_0);
        }

        setBoard((prev) =>{
            return prev.map((circle, pos) =>{
                if(pos === id) return currentPlayer;
                return circle;
            })
        })
        setCurrentPlayer(currentPlayer === Player_1 ? Player_2: Player_1);
    }

    const renderCircle = id => {
        return <GameCircle key={id} id={id} className={`player_${board[id]}`} CircleClicked={CircleClicked} />
    }

    // const newGame = () => {
        
    // }

    return (
    <>
    <Header currentPlayer={currentPlayer} winPlayer={winPlayer} gameState={gameState}/>
    <div className='gameBoard'>
        {initBoard()}
    </div>
    <Footer onNewGameClick={initGame} onSuggestClick={suggestMove} gameState={gameState}/>
    </>
  )
}

export default GameBoard;