import React from 'react';

export const DragAndClose =()=>{
    return(
        <div className=''>
            <div className='drag'>
                <div className='ellipses'>
                    <div className='ellipse' /><div className='ellipse' /><div className='ellipse' />
                </div>
                <div className='ellipses'>
                    <div className='ellipse' /><div className='ellipse' /><div className='ellipse' />
                </div>
            </div>
            <img src={require('../../assets/images/close-elipse.svg')} alt='بستن' className='closing'  />
        </div>
    )
};