import React from 'react';
import Carrousel from './Carrousel';
import Countdown from './Countdown'
const Featured = () => {
    return (
        <div>

            <Carrousel/>

           <div className="artist_name">
               <div className="wrapper">
                    Pixie & Petey
               </div>
            </div> 
            <Countdown/>
        </div>
    );
};

export default Featured;