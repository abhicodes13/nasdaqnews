import React, { useEffect, useState } from "react";

function StockNews() {
  const [market, setMarket] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const getData = async () => {
    const url = `https://devapi-finance.p.rapidapi.com/v2/markets/stock/ticker-summary?ticker=${searchTerm}&type=STOCKS`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "aaf412f001mshb16825a0d5065e6p181d8ajsn4a009ea4951a",
        "x-rapidapi-host": "devapi-finance.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setMarket(result.body.summaryData.MarketCap.value);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, [searchTerm]);
  return (
    <div>
      <div className="p-5 text-purple-800 text-center">
        <h1 className="font-semibold text-purple-800">Type in a ticker : </h1>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value.toUpperCase());
          }}
          className="w-[45vw] border-[4px] border-black p-3 rounded-md "
        />
        <h1 className="text-[3em] font-extrabold mt-7 ">Stock News</h1>
      </div>
      <h1 className="text-[3em] text-center">Market Cap : ${market}</h1>
    </div>
  );
}

export default StockNews;
