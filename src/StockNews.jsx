import React, { useEffect, useState } from "react";

function StockNews() {
  const [market, setMarket] = useState();
  useEffect(() => {
    const getData = async () => {
      const url =
        "https://devapi-finance.p.rapidapi.com/v2/markets/stock/ticker-summary?ticker=AAPL&type=STOCKS";
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "aaf412f001mshb16825a0d5065e6p181d8ajsn4a009ea4951a",
          "x-rapidapi-host": "devapi-finance.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setMarket(result.body.summaryData.MarketCap.value.math());
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);
  return (
    <div>
      <h1 className="text-[3em] text-center">Market Cap : ${market}</h1>
    </div>
  );
}

export default StockNews;
