import React from 'react';

export const ViewDemo =({selectViewDemo, handleSelectViewDemo})=>{
    return(
        <div className=' view-demo'>
            <div className='d-flex justify-content-end back-img-box mb-2'>
                <div className={`back-img  ml-2 ${selectViewDemo===1 ? 'back-dark': 'back-light'} `}
                     onClick={()=>handleSelectViewDemo('selectViewDemo',1)}>
                    <img src={require(`../../assets/images/desktop-view.svg`)} />
                </div>
                <div className={`back-img ${selectViewDemo===2 ? 'back-dark': 'back-light'} `}
                     onClick={()=>handleSelectViewDemo('selectViewDemo',2)}>
                    <img src={require(`../../assets/images/mobile-view.svg`)} />
                </div>
            </div>
            <div className='w-100 d-flex justify-content-end'>
                <div className={`demo height75vh ${selectViewDemo===2 ?'w-400':'w-100'}`} />
            </div>
        </div>
    )
};

