import axios from "axios";
import { useForm } from "react-hook-form";
import { useTalhaoContext } from "../../lib/talhaoContext/useTalhaoContext";

const labelStyle = "text-slate-500 mt-3 font-semibold";
const inputStyle =
  "border border-gray-300 my-2 p-2 rounded bg-white text-gray-700 text-lg focus:border focus:border-purple-500 focus:outline-none";
const TalhaoForm = () => {
  const { register, handleSubmit, setValue } = useForm();

  const { setShowCadastro } = useTalhaoContext();

  const onSubmit = (data) => {
    axios.post("http://26.2.137.63:8080/talhao/", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    // make an div absolute and centered
    <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center">
      <div className="rounded-lg bg-white p-10 shadow">
        <h1 className="text-2xl font-bold">Novo Talhão</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
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
              <label className={labelStyle} htmlFor="chuva">
                Latitude:
              </label>
              <input
                className={inputStyle}
                type="text"
                id="chuva"
                {...register("chuva", { required: true })}
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

          <button
            onClick={() => {
              navigator.geolocation.getCurrentPosition((position) => {
                setValue("latitude", position.coords.latitude);
                setValue("longitude", position.coords.longitude);
              });
            }}
          >
            Pegar localização atual
          </button>

          <div>
            <button
              className="container mx-auto mb-8 block w-full rounded bg-green-600 p-3 text-lg text-purple-50 transition-all hover:bg-green-500"
              onClick={() => {
                setShowCadastro(false);
              }}
            >
              <b> Cancelar </b>
            </button>

            <button
              className="container mx-auto mb-8 block w-full rounded bg-green-600 p-3 text-lg text-purple-50 transition-all hover:bg-green-500"
              type="submit"
            >
              <b> Salvar </b>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TalhaoForm;
