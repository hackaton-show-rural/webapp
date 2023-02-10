import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Form } from "../../../components/Form";
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
    axios
      .get(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&exclude=minutely,hourly,daily&appid=bc54e25619ce3cce4c597311a6e8a835&lang=pt_br&units=metric`
      )
      .then((res) => {
        setData(res.data);
      });
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
            src="/edit.svg"
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
