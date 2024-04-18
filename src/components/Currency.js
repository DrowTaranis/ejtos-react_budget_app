import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import './currStyle.css';

const Currency = () => {
const [curr, changeCurr] = useState("£ Pound");
const [currSign, changeCurrSign] = useState("£");


const handleChange = (event) => {
     const value = event.target.value;
     changeCurr(value);
     changeCurrSign(value[0]);
     document.getElementById("currencySign").innerHTML = value[0]; }

    return (
        <>
        <form>
            <label id="currLabel" htmlfor="currSel">Currency: {curr}</label>
<select id="currSel" onChange={handleChange}>
    <option value="$ Dollar" >$ Dollar</option>
    <option value="£ Pound" >£ Pound</option>
    <option value="€ Euro" >€ Euro</option>
    <option value="₹ Ruppee" >₹ Ruppee</option>
</select>

</form>
<span className="csign1">{curr[0]}</span>
<span className="csign2">{curr[0]}</span>
<span className="csign3">{curr[0]}</span>
<span className="csign4">{curr[0]}</span>
<span className="csign5">{curr[0]}</span>
<span className="csign6">{curr[0]}</span>
<span className="csign7">{curr[0]}</span>
<span className="csign8">{curr[0]}</span>
<span className="csign9">{curr[0]}</span>
</>
    );
};




export default Currency;