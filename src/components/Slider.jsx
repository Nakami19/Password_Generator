import { useEffect, useState } from "react";


function Slider ({value, onValueChange}) {

    const MAX = 50;
  
    const getBackgroundSize = () => {
      return {
        backgroundSize: `${(value * 100) / MAX}% 100%`,
      };
    };

  
    return (
        <div className="flex flex-row space-x-2 items-center">
        <button onClick={()=>onValueChange(value-1)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Subtract-Circle--Streamline-Ultimate" height="28" width="28">
        <desc>Subtract Circle Streamline Icon: https://streamlinehq.com</desc>
        <path stroke="#000000" strokeLinecap="round" strokeLinejoin="round" d="M7.5 12h9" strokeWidth="1.5"></path>
        <path stroke="#000000" strokeLinecap="round" strokeLinejoin="round" d="M0.75 12c0 2.9837 1.18526 5.8452 3.29505 7.955C6.15483 22.0647 9.01631 23.25 12 23.25c2.9837 0 5.8452 -1.1853 7.955 -3.295 2.1097 -2.1098 3.295 -4.9713 3.295 -7.955 0 -2.98369 -1.1853 -5.84517 -3.295 -7.95495C17.8452 1.93526 14.9837 0.75 12 0.75c-2.98369 0 -5.84517 1.18526 -7.95495 3.29505C1.93526 6.15483 0.75 9.01631 0.75 12Z" strokeWidth="1.5"></path>
        </svg>
        </button>
        <input
        type="range"
        min="0"
        max={MAX}
        value={value}
        onChange={(e) => onValueChange(Number(e.target.value))}
        className="custom-range w-64"
        style={getBackgroundSize()}
        />
        <button onClick={()=>onValueChange(value+1)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" id="Add-Circle--Streamline-Core" height="28" width="28">
            <desc>Add Circle Streamline Icon: https://streamlinehq.com</desc>
            <g id="add-circle--button-remove-cross-add-buttons-plus-circle-+-mathematics-math">
                <path id="Vector" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" d="M7 13.5c3.5899 0 6.5 -2.9101 6.5 -6.5C13.5 3.41015 10.5899 0.5 7 0.5 3.41015 0.5 0.5 3.41015 0.5 7c0 3.5899 2.91015 6.5 6.5 6.5Z" strokeWidth="1"></path>
                <path id="Vector_2" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" d="M7 4v6" strokeWidth="1"></path>
                <path id="Vector_3" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" d="M4 7h6" strokeWidth="1"></path>
            </g>
            </svg>
        </button>  
        
        </div>
     
    );

}

export default Slider 