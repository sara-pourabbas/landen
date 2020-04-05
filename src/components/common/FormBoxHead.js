import React from 'react';


export const FormBoxHead =(props)=>{
    const {menuAndArrow,title,metaTag,arrowDownClick,arrowUpClick} = props;

    return(
        <div className='form-head '>
            {
                menuAndArrow?
                    <div className='menuAndArrow'>
                        <div className='dots-icon'>
                            <div className='dot' /> <div className='dot' /> <div className='dot' />
                        </div>
                        <div>
                            <img src={require('../../assets/images/arrow-down.svg')} alt={'فلش پایین'}
                                 className='ml-3'
                                 onClick={arrowDownClick}
                            />
                            <img src={require('../../assets/images/arrow-up.svg')} alt={'فلش بالا'}
                                 onClick={arrowUpClick}
                            />
                        </div>
                    </div>
                    :
                    ''
            }
            <div className='head-title'>
                {title}
            </div>
            {metaTag ? <div className='meta-tag'>{metaTag}</div>: ''}
        </div>
    )
};