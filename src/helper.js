
export const isWinner = (GameBoard, currentMove, currentPlayer) => {
    let board = [...GameBoard];
    board[currentMove] = currentPlayer;

    const winLine = [
        [0,1,2,3],
        [4,5,6,7],
        [8,9,10,11],
        [12,13,14,15],
        [0,4,8,12],
        [1,5,9,13],
        [2,6,10,14],
        [3,7,11,15],
        [0,5,10,16],
        [3,6,9,12]
    ];
    for(let i=0; i<winLine.length; i++){
        const[c1, c2, c3, c4] = winLine[i];
        if(board[c1] > 0 && 
            board[c1] === board[c2] &&
            board[c2] === board[c3] &&
            board[c3] === board[c4]){
                return true;
            }
    }
    return false;
}

export const isDraw = (GameBoard, currentMove, currentPlayer) => {
    let board = [...GameBoard];
    board[currentMove] = currentPlayer;
    console.log(board);
    let count = board.reduce((n, x) => n + (x === 0), 0);
    console.log(`count ${count}`);
    return count === 0;
}


const getRNDComputerMove = (GameBoard) => {
    let validMoves = [];
    for(let i=0; i<GameBoard.length; i++){
        if(GameBoard[i] === 0){
            validMoves.push(i);
        }
    }
    let rndMove = Math.floor(Math.random() * validMoves.length);
    return validMoves[rndMove];
}

const getPosition = (GameBoard, moveCheck) => {
    for(let check=0; check<moveCheck.length; check++){
        for(let i=0; i<moveCheck[check].max; i += moveCheck[check].step){
            let series = GameBoard[i + moveCheck[check].index[0]].toString() + 
            GameBoard[i + moveCheck[check].index[1]].toString() +
            GameBoard[i + moveCheck[check].index[2]].toString() +
            GameBoard[i + moveCheck[check].index[3]].toString();
            switch (series){
                case "1110":
                case "2220":
                    return i + moveCheck[check].index[3];
                case "1101":
                case "2202":
                    return i + moveCheck[check].index[2];
                case "1011":
                case "2022":
                    return i + moveCheck[check].index[1];
                case "0111":
                case "0222":
                    return i + moveCheck[check].index[0];
                default:
            }
            
        }
    }
    return -1;
}

export const getComputerMove = (GameBoard) => {
    let moveCheck = [
        // verticle
        {
            index: [0,4,8,12],
            max: 4,
            step: 1
        },
        // horizontal
        {
            index: [0,1,2,3],
            max: 16,
            step: 4
        },
        //diagonal right
        {
            index: [0,5,10,15],
            max: 16,
            step: 16
        },
        // diagonal left
        {
            index: [3,6,9,12],
            max: 16,
            step: 16
        }
    ]
    let position = getPosition(GameBoard, moveCheck);
    if (position > -1) return position;
    return getRNDComputerMove(GameBoard);
}