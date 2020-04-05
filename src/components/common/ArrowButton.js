import React from 'react';

export const ArrowButton =(props)=>{
    const {disabled} = props;
    return(
        <div className='arrow-line d-flex justify-content-center mt-2rem'>
            <div className='position-relative'>
                <div className="before"/>
                {!disabled?
                <div>
                    <div className="vertical-line"/>
                    <div className="after"/>
                </div>
                    :''
                }
            </div>
        </div>
    )
};
