async function drawLineChart() {
  const dataD3 = await d3.json("./my_weather_data.json");

  const yAccessor = (d) => d["temperatureMax"];
  console.log(yAccessor(dataD3[0]));

  const parseDate = d3.timeParse("%Y-%m-%d");

  const xAccessor = (d) => parseDate(d["date"]);
  console.log(xAccessor(dataD3[0]));
}

drawLineChart();
