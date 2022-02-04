import React from 'react';
import Image from 'next/image'; 
const Logo = ({theme, cl})=>{
    return (
        <div className={(theme == 'dark') ? `${cl} dark` : `${cl} light`}>
            <Image
                src="/complete-logo-dark.svg" 
                alt="CryptoPrices logo" 
                width="310px"
                height="50px"
            /> 
        </div>
    )
}
export default Logo;