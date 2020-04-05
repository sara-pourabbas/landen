import React from "react";
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';
export const MobileVersion = () => {
    return (
        <div className='mobile-version'>
            <div className='mobile-version-logo-box'>
                <img src={require('../../assets/images/logo-Landin.svg')} alt='لوگو' className='logo' />
            </div>
            <div>
                <div className='section section-mobile'>
                    <h2 className='section-title'>
                        با موبایل نمیشه!
                    </h2>
                    <div className='section-sub-title text-center mt-3'>
                        لطفا برای ساخت یا ویرایش لندینگ پیج با نسخه دسکتاپ وارد شوید!
                    </div>
                    <div className='text-center '>
                        <Link to={''}>
                            <Button className='return-button'>  بازگشت  </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};