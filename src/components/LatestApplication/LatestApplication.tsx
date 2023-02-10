import dayjs from "dayjs";
import Image from "next/image";

const LatestApplication = ({ application, setShowCadastro }) => {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-gray-100 p-6 shadow-lg">
      <div className="flex flex-row items-center gap-2">
        <div className=" flex h-9 w-9 flex-row items-center justify-center rounded-full bg-green-200">
          <div className=" flex h-6 w-6 flex-row items-center justify-center rounded-full bg-green-300">
            <div className="flex flex-row items-center justify-center">
              <Image src="/drop.svg" width={22} height={22} alt="drop" />
            </div>
          </div>
        </div>
        <span className="font-bold">Última aplicação:</span>{" "}
      </div>
      <div className="flex flex-row gap-8">
        <p>
          <span className="mt-3 font-semibold text-slate-500">Inicio:</span>{" "}
          <span className="font-semibold ">
            {dayjs(application?.dataInicio).format("DD/MM/YYYY  HH:mm")}
          </span>
        </p>
        <p>
          <span className="mt-3 font-semibold text-slate-500">Fim:</span>{" "}
          <span className="font-semibold ">
            {dayjs(application?.dataFim).format("DD/MM/YYYY  HH:mm")}
          </span>
        </p>
      </div>
      <div className="flex flex-row justify-between">
        <ul>
          <li>
            {" "}
            <span className="mt-3 font-semibold text-slate-500">
              Temperatura:
            </span>{" "}
            <span className="font-semibold">
              {application?.temperaturaAtual} °C{" "}
            </span>
          </li>
          <li>
            <span className="mt-3 font-semibold text-slate-500">Umidade:</span>{" "}
            <span className="font-semibold">
              {application?.umidadeRelativa}{" "}
            </span>
          </li>
        </ul>
        <ul>
          <li>
            <span className="mt-3 font-semibold text-slate-500">Vento:</span>{" "}
            <span className="font-semibold">{application?.velVento} </span>
          </li>
          <li>
            <span className="mt-3 font-semibold text-slate-500">Chuva:</span>{" "}
            <span className="font-semibold">
              {application?.chuva ? "Sim" : "Não"}{" "}
            </span>
          </li>
        </ul>
      </div>

      <details>
        <summary>Produtos utilizados</summary>
        <ul className="gap-1">
          {application?.produtos?.map((item, idx) => {
            return (
              <li id={idx}>
                <span className="font-semibold">
                  <br />- {item.nome}
                </span>
              </li>
            );
          })}
        </ul>
      </details>
    </div>
  );
};
export default LatestApplication;
