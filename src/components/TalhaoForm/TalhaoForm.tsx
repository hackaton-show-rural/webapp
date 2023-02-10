import axios from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TalhaoContext } from "../../pages/_app";

const labelStyle = "text-slate-500 mt-3 font-semibold";
const inputStyle =
  "border border-gray-300 my-2 p-2 rounded bg-white text-gray-700 text-lg focus:border focus:border-purple-500 focus:outline-none";
const TalhaoForm = () => {
  const { register, handleSubmit, setValue } = useForm();

  const ctx = useContext(TalhaoContext);

  const { showCadastro, setShowCadastro } = ctx;

  const onSubmit = (data) => {
    axios
      .post("http://26.2.137.63:8080/talhao/", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        setShowCadastro(false);
      });
  };

  return (
    <div className="   absolute top-0 left-0 flex h-screen w-screen items-center justify-center">
      <div className="rounded-lg bg-white p-10 shadow">
        <h1 className="text-2xl font-bold">Novo Talhão</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col ">
          <div className="flex flex-col">
            <label className={labelStyle} htmlFor="nome">
              Nome do Talhão:
            </label>
            <input
              className={inputStyle}
              type="text"
              id="nome"
              {...register("nome", { required: true })}
            />
          </div>

          <div>
            <div className="flex flex-col">
              <label className={labelStyle} htmlFor="latitude">
                Latitude:
              </label>
              <input
                className={inputStyle}
                type="text"
                id="latitude"
                {...register("latitude", { required: true })}
              />
            </div>{" "}
            <div className="flex flex-col">
              <label className={labelStyle} htmlFor="longitude">
                Longitude:
              </label>
              <input
                className={inputStyle}
                type="text"
                id="longitude"
                {...register("longitude", { required: true })}
              />
            </div>
          </div>
          <div className="mt-2 flex flex-col gap-2">
            <button
              className="container  w-full rounded bg-blue-600 p-3 text-lg text-purple-50 transition-all hover:bg-blue-500"
              onClick={() => {
                navigator.geolocation.getCurrentPosition((position) => {
                  setValue("latitude", position.coords.latitude);
                  setValue("longitude", position.coords.longitude);
                });
              }}
            >
              Pegar localização atual
            </button>

            <div className="flex flex-row gap-2">
              <button
                className="container  w-full rounded bg-red-600 p-3 text-lg text-purple-50 transition-all hover:bg-red-500"
                onClick={() => {
                  setShowCadastro(false);
                }}
              >
                <b> Cancelar </b>
              </button>
              <button
                className="container  w-full rounded bg-green-600 p-3 text-lg text-purple-50 transition-all hover:bg-green-500"
                type="submit"
              >
                <b> Salvar </b>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TalhaoForm;
