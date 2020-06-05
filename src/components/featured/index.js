import React from 'react';
import Carrousel from "./Carrousel";
import TImeUntil from './TimeUntil';

const Featured = () => {
    return(
        <div style={{ position:'relative' }}>

            <Carrousel />

            <div className='artist_name'>
                <div className='wrapper'>
                    Pink Floyd
                </div>
            </div>

            <TImeUntil />
            
        </div>
    )
}

export default Featured;