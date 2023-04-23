import React, { useState, useEffect } from 'react';

const saveGas = ({miles}) => {
    const str_miles = String(miles);
    return (
        <div className="saveGas">
          <li className="HomeBottomList">
            <ul className="homelistitem">
                Wow you saved {str_miles} miles!!
            </ul>
          </li>
        </div>
    )
}
export default saveGas;