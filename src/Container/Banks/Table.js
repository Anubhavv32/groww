import React from "react";
import { Link } from "react-router-dom";

function Table({ bankDetails }) {
  return (
    <div>
      {bankDetails.length ? (
        <table>
          <thead>
            <tr>
              <th>Bank Name</th>
              <th>Branch</th>
              <th>IFSC</th>
              <th>City</th>
              <th>District</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            {bankDetails.map((bankDetails) => {
              return (
                <tr key={bankDetails.ifsc}>
                  <td data-column="First Name">
                    <Link
                      to={{
                        pathname: `bank-details/${bankDetails.ifsc}`,
                        state: { bankDetails },
                      }}
                    >
                      {bankDetails.bank_name}
                    </Link>
                  </td>
                  <td data-column="First Name">{bankDetails.branch}</td>
                  <td data-column="Last Name">{bankDetails.ifsc}</td>
                  <td data-column="Job Title">{bankDetails.city}</td>
                  <td data-column="Twitter">{bankDetails.district}</td>
                  <td data-column="Twitter">{bankDetails.state}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div>Please wait. Data is loading....</div>
      )}
    </div>
  );
}

export default Table;
