/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import "./bank.css";
import { fetchBankData } from "../../redux/action";
import Table from "./Table";

import { useDispatch, useSelector } from "react-redux";
import SearchBar from "./SearchBar";

export const Banks = () => {
  const dispatch = useDispatch();
  const bankDetails = useSelector((state) => state.allBankDetails);
  const [pageNo, setPageNo] = useState(0);
  const [row, setRow] = useState(10);
  const [category, setCategory] = useState("");
  const [param, setParam] = useState("");
  const [allBankDetails, setBankDetails] = useState(bankDetails);
  let bankToShow = [];
  useEffect(() => {
    if (!bankDetails.length) dispatch(fetchBankData('MUMBAI'));
    setBankDetails(bankDetails);
    setPageNo(0);
  }, []);
  useEffect(() => {
    setBankDetails(bankDetails);
    setPageNo(0);
  }, [bankDetails]);
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (param) {
        const filterDetails = filter(category, param);
        setBankDetails(filterDetails);
        setPageNo(0);
      }
    }, 400);
    return () => clearTimeout(delayDebounceFn);
  }, [param]);
  const filter = (category, param) => {
    return bankDetails.filter((bankDetail) =>
      bankDetail[category].startsWith(param)
    );
  };
  bankToShow = allBankDetails.slice(0 + pageNo * row, (pageNo + 1) * row);
  if (!allBankDetails.length) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <div className="bank-container">
      <div className="main-line">
        <div className="table-list">
          <h1>All banks</h1>
          <SearchBar category={category} setCategory={setCategory} />
        </div>
        <Table bankDetails={bankToShow} pageNo={pageNo} setParam={setParam} />
        {allBankDetails.length ? (
          <div className="footer">
            <div className="pagination">
              <button
                type="button"
                disabled={!pageNo}
                onClick={() => setPageNo(pageNo - 1)}
              >
                Prev
              </button>
              <button type="button" disabled>
                {pageNo + 1}
              </button>
              <button
                type="button"
                onClick={() => setPageNo(pageNo + 1)}
                disabled={pageNo === Math.round(allBankDetails.length / 10)}
              >
                Next
              </button>
            </div>
            <div>
              <select onChange={(e) => setRow(e.target.value)} value={row}>
                <option value={5}>5</option>
                <option selected value={10}>
                  10
                </option>
                <option value={15}>15</option>
                <option value={20}>20</option>
              </select>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Banks;
