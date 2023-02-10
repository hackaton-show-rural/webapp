import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const Calendar = () => {
  const [calendarData, setCalendarData] = useState();

  const [cleannedData, setCleannedData] = useState();

  const getCalendar = async () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=-24.98&lon=-53.33&appid=bc54e25619ce3cce4c597311a6e8a835&lang=pt_br&units=metric`
      )
      .then((res) => setCalendarData(res.data));
  };

  useEffect(() => {
    getCalendar();
  }, []);

  useEffect(() => {
    if (calendarData) {
      setCleannedData(cleanData(calendarData));
    }
  }, [calendarData]);

  if (!cleannedData) return <div>Carregando...</div>;

  return (
    <div className="m-6 flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Previsão do tempo</h1>
        <p className="ml-2 text-gray-500">Cascavel - PR</p>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold">Próximos 5 dias</h2>
        <p className="ml-2 text-gray-500">
          Previsão de temperatura, umidade e vento
        </p>
      </div>

      <div className="bg-grey-200 flex  flex-row gap-4 overflow-y-scroll p-2 shadow-lg">
        {cleannedData.daysOfWeek.map((day, index) => {
          return (
            <div className=" flex min-w-[9rem] flex-col gap-2 ">
              <p className="text-xl font-bold "> {day.dayNum} </p>
              <p className="text-md font-semibold">({day.day})</p>
              <p className="text-md font-semibold ">
                {cleannedData.temperature[index]}ºC
              </p>
              <p className="text-gray-500">
                {cleannedData.humidity[index]}
                <span className="text-gray-500">%</span>
              </p>
              <p className="text-gray-500">{cleannedData.wind[index]}km/h</p>

              <div></div>
            </div>
          );
        })}
      </div>

      <button className="container mt-2 rounded bg-green-500 p-1 text-lg text-purple-50 transition-all hover:bg-green-500">
        <Link href="/aplicador/aplicar">Ir para a aplicação</Link>
      </button>
    </div>
  );
};

const cleanData = (data) => {
  // filter the calendarData to get the days, filtering the, wind, rain, umidity, and temperature
  const days = data.list.filter((item) => {
    return item.dt_txt.includes("12:00:00");
  });

  // get the days of the week
  const daysOfWeek = days.map((item) => {
    const date = new Date(item.dt * 1000);
    const day = date.toLocaleString("pt-BR", { weekday: "long" });
    const dayNum =
      date.toLocaleString("pt-BR", { day: "2-digit" }) +
      "/" +
      date.toLocaleString("pt-BR", { month: "2-digit" });

    return { day, dayNum };
  });

  // get the temperature
  const temperature = days.map((item) => {
    return item.main.temp;
  });

  // get the humidity
  const humidity = days.map((item) => {
    return item.main.humidity;
  });

  // get the wind
  const wind = days.map((item) => {
    return item.wind.speed;
  });

  // get the rain
  const rain = days.map((item) => {
    return item.rain?.["3h"];
  });

  // get the weather
  const weather = days.map((item) => {
    return item.weather[0].description;
  });

  return {
    daysOfWeek,
    temperature,
    humidity,
    wind,
    rain,
    weather,
  };
};

export default Calendar;
