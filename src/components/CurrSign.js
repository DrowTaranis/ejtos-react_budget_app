import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const CurrSign = () => {
    return <span className="currSymbol">{document.getElementById("currencySign").innerHTML}</span>
}

export default CurrSign;