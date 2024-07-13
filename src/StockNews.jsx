import React, { useEffect, useState } from "react";

function StockNews() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const url =
        "https://real-time-finance-data.p.rapidapi.com/stock-news?symbol=AAPL%3ANASDAQ&language=en";
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "aaf412f001mshb16825a0d5065e6p181d8ajsn4a009ea4951a",
          "x-rapidapi-host": "real-time-finance-data.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        const data = result.data.news;
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);
  return (
    <div>
      {data.map((item) => {
        <h1>{item.article_title}</h1>;
      })}
    </div>
  );
}

export default StockNews;
