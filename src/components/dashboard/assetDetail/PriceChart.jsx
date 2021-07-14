import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

export default function PriceChart({ id, name }) {
  const [priceData, setPriceData] = useState(null);
  useEffect(() => {
    let days = 30;
    const labels = () => {
      let arr = [];
      for (let i = 1; i < days + 1; i++) {
        arr.push(i);
      }
      return arr;
    };
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
      )
      .then((res) =>
        setPriceData({
          labels: labels(),
          datasets: [
            {
              label: name,
              data: res.data.prices.map((i) => i[1]),
              fill: true,
              backgroundColor: "#5D92F925",
              responsive: true,
              borderColor: "#5D92F9",
              pointRadius: 0,
              pointHitRadius: 10,
            },
          ],
        })
      )
      .catch();
  }, []);
  return (
    <>
      {priceData ? (
        <Line data={priceData} />
      ) : (
        <div className="h-28 w-full flex items-center font-medium text-lg justify-center">
          Loading chart...
        </div>
      )}
    </>
  );
}
