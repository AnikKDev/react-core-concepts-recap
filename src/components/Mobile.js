import React, { useState } from 'react';
import './Mobile.css'

const Mobile = () => {
    const [charge, setCharge] = useState(100);
    const changeCharge = () => {
        if (charge > 0) {
            setCharge(charge - 10);
        }
        else {
            return charge;
        }
    }

    return (
        <div className='container'>
            <h5>Charge: {charge}</h5>
            <button onClick={changeCharge}>Battery Down</button>
        </div>
    );
};

export default Mobile;