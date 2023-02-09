import axios from "axios";
import dayjs from "dayjs";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
const inputStyle =
  "border border-gray-300 my-2 p-2 rounded bg-white text-gray-700 text-lg focus:border focus:border-purple-500 focus:outline-none";
const labelStyle = "text-slate-500 mt-3";
const pStyle = "text-slate-800 font-semibold text-lg mt-1 ml-2";

export const Form = ({ data, applicationParams, isEdit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm();

  useEffect(() => {
    reset({
      temperaturaAtual: data?.current?.temp,
      velVento: data?.current?.wind_speed,
      umidadeRelativa: data?.current?.humidity,
      chuva: data?.current?.rain ? "sim" : "não",
      proximaChuva: data?.current?.rain,
      dataInicio: dayjs(data?.curent?.dt).format("YYYY-MM-DD"),
    });
  }, []);

  const onSubmit = (data) => {
    axios.post(
      "http://26.2.137.63:8080/coleta/save",
      { ...data, chuva: data.chuva === "sim" ? true : false, editado: isEdit },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2">
        <div>
          <h1>Escolha o metodo de aplicação:</h1>
          <div className="flex items-center">
            <input
              className="bold h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-purple-500 "
              type="radio"
              defaultChecked={true}
              value={"TERRESTRE"}
              {...register("tipoAplicacao")}
            />
            <label className="ml-2  text-gray-700" htmlFor="sanded">
              Pulverizador
            </label>
          </div>

          <div className="flex items-center">
            <input
              className="h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-purple-500 "
              type="radio"
              value={2}
              defaultChecked={false}
              {...register("tipoAplicacao")}
            />
            <label className="ml-2 text-gray-700" htmlFor="sanded">
              Avião
            </label>
          </div>
          <div className="flex items-center ">
            <input
              className="h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-purple-500 "
              type="radio"
              value={3}
              defaultChecked={false}
              {...register("tipoAplicacao")}
            />
            <label className="ml-2 text-gray-700" htmlFor="paint">
              Vant (drone):
            </label>
          </div>
        </div>

        <div className="flex flex-col">
          <label className={labelStyle} htmlFor="temperaturaAtual">
            Temperatura:
          </label>

          {!isEdit ? (
            <p className={pStyle}>{data.current.temp} °C</p>
          ) : (
            <input
              className={inputStyle}
              type="number"
              id="temperaturaAtual"
              min="1"
              step={0.01}
              max="100"
              defaultValue={1}
              {...register("temperaturaAtual", { required: true })}
            />
          )}
        </div>

        <div className="flex flex-col">
          <label className={labelStyle} htmlFor="velVento">
            Velocidade do vento:
          </label>
          {!isEdit ? (
            <p className={pStyle}>{data?.current?.wind_speed}</p>
          ) : (
            <input
              className={inputStyle}
              type="number"
              id="velVento"
              step={0.01}
              min="1"
              max="100"
              defaultValue={1}
              {...register("velVento", { required: true })}
            />
          )}
        </div>

        <div className="flex flex-col">
          <label className={labelStyle} htmlFor="umidadeRelativa">
            Umidade relativa do ar:
          </label>

          {!isEdit ? (
            <p className={pStyle}>{data?.current?.humidity}</p>
          ) : (
            <input
              className={inputStyle}
              type="number"
              id="umidadeRelativa"
              step={0.01}
              min="1"
              max="100"
              defaultValue={1}
              {...register("umidadeRelativa", { required: true })}
            />
          )}
        </div>

        <div className="flex flex-col">
          <label className={labelStyle} htmlFor="chuva">
            Esta chovendo:
          </label>
          {!isEdit ? (
            <p className={pStyle}>{data?.current?.rain ? "sim" : "não"}</p>
          ) : (
            <input
              className={inputStyle}
              type="text"
              id="chuva"
              {...register("chuva", { required: true })}
            />
          )}
        </div>

        <div className="flex flex-row gap-4">
          <div className="flex flex-col">
            <label className={labelStyle} htmlFor="chuva">
              Data do início da coleta
            </label>
            {!isEdit ? (
              <p className={pStyle}>
                {dayjs(data?.curent?.dt).format("DD/MM/YY")}
              </p>
            ) : (
              <input
                className={inputStyle}
                type="date"
                id="dataInicio"
                {...register("dataInicio", { required: true })}
              />
            )}
          </div>
          <div className="flex flex-col">
            <label className={labelStyle} htmlFor="chuva">
              Data do fim da coleta
            </label>
            {!isEdit ? (
              <p className={pStyle}>Definida ao termino da coleta</p>
            ) : (
              <input
                className={inputStyle}
                type="date"
                id="chuva"
                {...register("chuva", { required: true })}
              />
            )}
          </div>
        </div>

        <div className="flex flex-col">
          <label className={labelStyle} htmlFor="proximaChuva">
            Proxima chuva (horas)
          </label>
          {!isEdit ? (
            <p className={pStyle}>{data?.current?.rain}</p>
          ) : (
            <input
              className={inputStyle}
              type="number"
              id="proximaChuva"
              {...register("proximaChuva", { required: true })}
            />
          )}
        </div>

        <div className="flex flex-col">
          <button
            className="container mx-auto mb-8 block w-full rounded bg-purple-700 p-3 text-lg text-purple-50 transition-all hover:bg-purple-600"
            type="submit"
          >
            <b> Iniciar</b>
          </button>
        </div>
      </div>
    </form>
  );
};
