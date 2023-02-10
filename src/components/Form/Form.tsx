import axios from "axios";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
const inputStyle =
  "border border-gray-300 my-2 p-2 rounded bg-white text-gray-700 text-lg focus:border focus:border-purple-500 focus:outline-none";
const labelStyle = "text-slate-500 mt-3 font-semibold";
const pStyle = "text-slate-800 font-semibold text-lg mt-1 ml-2";
const infoStyle = "text-slate-500 text-sm mt-1 ml-2 ";

export const Form = ({ data, applicationParams: params, isEdit, talhao }) => {
  const [applicationParams, setApplicationParams] = useState(params);
  const [id, setId] = useState(0);
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    watch,
    formState: { errors, isDirty },
  } = useForm();

  useEffect(() => {
    if (getValues("tipoApplicacao") === "TERRESTRE") {
      setApplicationParams(params?.[0]);
    } else if (getValues("tipoAplicacao") === 2) {
      setApplicationParams(params?.[1]);
    } else {
      setApplicationParams(params?.[2]);
    }
  }, [params, getValues("tipoAplicacao")]);

  useEffect(() => {
    reset({
      temperaturaAtual: data?.current?.temp,
      velVento: data?.current?.wind_speed,
      umidadeRelativa: data?.current?.humidity,
      chuva: data?.current?.rain ? "sim" : "não",
      proximaChuva: data?.current?.rain,
      dataInicio: dayjs(data?.curent?.dt).format("YYYY-MM-DD"),
      dataFim: null,
      talhao: null,
    });
  }, []);

  const onSubmit = (data) => {
    if (id) {
      axios.post(
        "http://26.2.137.63:8080/coleta/save",
        {
          id,
          finalizado: true,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return;
    }

    const res = axios.post(
      "http://26.2.137.63:8080/coleta/save",
      {
        ...data,
        chuva: data.chuva === "sim" ? true : false,
        hasChanged: isDirty,
        dataInicio: dayjs(data.dataInicio).toISOString(),
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setId(res.id);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2">
        <div>
          <h1 className={labelStyle + " mb-2 "}>
            Escolha o metodo de aplicação:
          </h1>
          <div className="ml-2 flex items-center">
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

          <div className="ml-2 flex items-center">
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
          <div className="ml-2 flex items-center">
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
          <label className={labelStyle} htmlFor="talhao">
            Talhão:
          </label>
          <select
            {...(register("talhao"), { required: true })}
            className={inputStyle}
            name="talhao"
            id="talhao"
          >
            {talhao &&
              talhao.map((item, idx) => {
                return (
                  <option key={idx} value={item.nome}>
                    {item.nome}
                  </option>
                );
              })}
          </select>
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
          <p className={infoStyle}>
            O valor recomendado é{" "}
            {applicationParams?.coletaIdeal?.temperaturaIdeal}
          </p>
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
          <p className={infoStyle}>
            Velocidade do vento ideal é de{" "}
            {applicationParams?.coletaIdeal?.velocidadeVentoMinima} e{" "}
            {applicationParams?.coletaIdeal?.velocidadeVentoMaxima}
          </p>
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
          <p className={infoStyle}>
            Velocidade do vento ideal é de{" "}
            {applicationParams?.coletaIdeal?.umidadeRelativaMinima} e{" "}
            {applicationParams?.coletaIdeal?.umidadeRelativaMaxima}
          </p>
        </div>

        <div className="flex flex-col">
          <label className={labelStyle} htmlFor="chuva">
            Esta chovendo:
          </label>
          {!isEdit ? (
            <p className={pStyle}>{data?.current?.rain ? "Sim" : "Não"}</p>
          ) : (
            <input
              className={inputStyle}
              type="text"
              id="chuva"
              {...register("chuva", { required: true })}
            />
          )}
          <p className={infoStyle}>
            Não é permitido fazer aplicação durante a chuva
          </p>
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
                {...register("dataFim", { required: true })}
              />
            )}
          </div>
        </div>

        {/*         <div className="flex flex-col">
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
        </div> */}

        <div className="flex flex-col">
          <button
            className="container mx-auto mb-8 block w-full rounded bg-green-600 p-3 text-lg text-purple-50 transition-all hover:bg-green-500"
            type="submit"
          >
            <b> {id ? "Finalizar" : "Iniciar"} </b>
          </button>
        </div>
      </div>
    </form>
  );
};
