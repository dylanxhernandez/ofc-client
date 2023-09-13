import { useState } from "react";

function Home() {
  return (
    <>
      <p>
        The Open Financial Calculator is an application that provides basic financial calculations to assist users with financial planning.
	The application utilizes serverless functions on Netlify. Use the links at the top to navigate to each of the available tools. A quick summary of each tool is shown below.
      </p>
      <p>
	<strong>Rate of Return</strong> - calculates the rate of return and other related metrics for investments or financial transactions.<br/><br/>
	<strong>Future Value</strong> - calculates the future value of an investment based on a specified interest rate and compounding period, as well as the initial investment amount and the length of the investment.<br/><br/>
	<strong>Future Amount</strong> - calculates the future amount of a regular investment based on a specified interest rate and compounding period, as well as the initial investment amount, the length of the investment, and the regular investment amount.<br/><br/>
	<strong>Capital Depletion</strong> - calculates the depletion of capital over time based on a specified investment rate of return, initial investment amount, and regular withdrawals.<br/><br/>
	<strong>Major Purchase</strong> - calculates the required amount of money that needs to be saved on a regular basis in order to reach a specified financial goal, such as a down payment on a home or a college education.<br/><br/>
	<strong>Desired Income</strong> - calculates the estimated required investment amount for generating the desired future income; ideal for fixed income and dividend calculations. 
      </p>
    </>
  );
}

export default Home;

