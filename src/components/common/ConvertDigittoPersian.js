import React from 'react';
//convert number to letter persian
export const ConvertDigitToPersian=(i)=>{
        let num = '';
        switch (i) {
            case 1:
                num = 'اول';
                break;
            case 2 :
                num = 'دوم' ;
                break;
            case 3 :
                num = 'سوم' ;
                break;
            case 4 :
                num = 'چهارم' ;
                break;
            case 5 :
                num = 'پنجم' ;
                break;
            case 6 :
                num = 'ششم' ;
                break;
        }
        return num;
    };