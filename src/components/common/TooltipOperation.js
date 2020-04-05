
import React from "react";
export const TooltipOperation=({title})=>{
    return(
        <div className='operation-tooltip'>
            <div className='tooltip-in'>
                {title}
                <div className='triangle' />
            </div>
        </div>
    )
};