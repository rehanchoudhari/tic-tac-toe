import React from 'react';

// instead of this we can directly access id using below function
// const GameCircle = (props) => {
//   return (
//     <div onClick={isClick}>
//         GameCircle: {props.id}
//     </div>
//   )
// }

const GameCircle = ({id, className, CircleClicked, children}) => {
    return (
      <div className={`gameCircle ${className}`} onClick={ () => CircleClicked(id)}>
          {children}
      </div>
    );
  }

export default GameCircle;