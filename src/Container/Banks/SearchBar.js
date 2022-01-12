import React from 'react';

import { useDispatch, useSelector } from "react-redux";
import { fetchBankData, setCity } from "../../redux/action";

function SearchBar({setCategory, category, setParam}) {
    const city = useSelector((state) => state.city);
    const dispatch = useDispatch();
    const cityhandler = (e) => {
        dispatch(setCity(e.target.value));
        dispatch(fetchBankData(e.target.value));
    };
    return (
        
        <div>
        <select onChange={cityhandler} value={city}>
          <option value="">Select City</option>
          <option value="MUMBAI">Mumbai</option>
          <option value="BANGLORE">Banglore</option>
          <option value="CHENNAI">Chennai</option>
          <option value="DELHI">Delhi</option>
          <option value="LUCKNOW">Lucknow</option>
        </select>
        <div>
          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            required
          >
            <option value="">Select Categories</option>
            <option value="ifsc">IFSC</option>
            <option value="branch">Branch Name</option>
            <option value="bank_name">Bank Name</option>
          </select>
          <input
            onChange={(e) => setParam(e.target.value)}
            required
            placeholder={`Enter ${category}`}
          />
        </div>
      </div>
    )
}

export default SearchBar;
