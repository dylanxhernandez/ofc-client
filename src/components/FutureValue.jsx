import { useState } from "react";

function FutureValue() {
  return (
    <>
      <h3>Future Value</h3>
      <p>
	The /api/fv endpoint calculates the future value of an investment based on a specified interest rate and compounding period, as well as the initial investment amount and the length of the investment. It provides three modes of operation: periodic-annual-compound-return, lumpsum-annual-compound-return, and periodic-lumpsum-annual-compound-return. 
      </p>
      <p>Use the table below to make a future value calculation.</p>
      <table>
	<thead>
	  <tr>
	    <td>Mode Selection Goes Here</td>
	  </tr>
	</thead>
	<tbody>
	  <tr></tr>
	</tbody>
	<tfoot>
	  <tr></tr>
	</tfoot>
      </table>
    </>
  );
}

export default FutureValue;

