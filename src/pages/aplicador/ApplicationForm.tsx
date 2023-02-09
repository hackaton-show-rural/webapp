import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Form } from "../../components/Form";
const geoOptions = {
  enableHighAccuracy: true,
  timeout: 50000,
};

type DataType = {
  id: number;
};

const ApplicationForm = () => {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [data, setData] = useState<DataType>();
  const [applicationParams, setApplicationParams] = useState();
  const [isEdit, setIsEdit] = useState(false);
  const [talhao, setTalhao] = useState();
  const getCurrentInfo = async (lat, long) => {
    /*     const { data } = await axios.get(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&exclude=minutely,hourly,daily&appid=0bb25a1321a28d70e418a2a546c3b216&lang=pt_br&units=metric`
    ); */

    const mock = {
      lat: -25.5026,
      lon: -49.2908,
      timezone: "America/Sao_Paulo",
      timezone_offset: -10800,
      current: {
        dt: 1675964710,
        sunrise: 1675933126,
        sunset: 1675980244,
        temp: 30.14,
        feels_like: 30.5,
        pressure: 1015,
        humidity: 45,
        dew_point: 16.9,
        uvi: 7.87,
        clouds: 0,
        visibility: 10000,
        wind_speed: 2.57,
        wind_deg: 250,
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "céu limpo",
            icon: "01d",
          },
        ],
      },
      alerts: [
        {
          sender_name: "Instituto Nacional de Meteorologia",
          event: "Tempestade",
          start: 1675949700,
          end: 1676034000,
          description:
            "INMET publica aviso iniciando em: 09/02/2023 10:35. Chuva entre 30 e 60 mm/h ou 50 e 100 mm/dia, ventos intensos (60-100 km/h), e queda de granizo. Risco de corte de energia elétrica, estragos em plantações,  queda de árvores e de alagamentos.",
          tags: ["Wind"],
        },
      ],
    };
    setData(mock);
  };

  const getWeatherParams = async () => {
    const { data } = await axios.get(`http://26.2.137.63:8080/tipoAplicacao/`);
    setApplicationParams(data);
  };

  const getTalhao = async () => {
    const { data } = await axios.get(`http://26.2.137.63:8080/talhao/`);
    setTalhao(data);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
        console.log(position.coords.latitude, position.coords.longitude);
      },
      (err) => {
        console.log(err);
      },
      geoOptions
    );
  }, []);

  useEffect(() => {
    getTalhao();
    getWeatherParams();
    if (lat && lng) {
      getCurrentInfo(lat, lng);
    }
  }, [lat, lng]);

  if (!data) {
    return (
      <div>
        <h1>loading...</h1>
      </div>
    );
  }
  return (
    <div className="m-6 flex flex-col gap-6">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-xl font-medium text-slate-800">
          Realizar aplicação
        </h1>
        <button
          className=" align-center border-[rgb(208, 213, 221)] h-[36] w-[36] justify-center rounded-xl border p-[10px]"
          onClick={() => {
            setIsEdit(true);
          }}
        >
          <Image
            style={{
              filter: "invert(0.4) sepia(.01) saturate(0) hue-rotate(0deg)",
            }}
            src="edit.svg"
            alt="editar"
            width={24}
            height={24}
          />
        </button>
      </div>
      <Form
        isEdit={isEdit}
        talhao={talhao}
        applicationParams={applicationParams}
        data={data}
      />
    </div>
  );
};

export default ApplicationForm;
