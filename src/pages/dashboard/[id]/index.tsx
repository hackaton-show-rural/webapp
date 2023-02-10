import axios from "axios";
import dayjs from "dayjs";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import LatestApplication from "../../../components/LatestApplication";
import { TalhaoContext } from "../../_app";
const Index = () => {
  const context = useContext(TalhaoContext);

  const { setShowCadastro } = context;

  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState();
  // chamada para a api
  const getTalhao = async (id) => {
    const { data } = await axios.get(`http://26.2.137.63:8080/talhao/${id}`);
    setData(data);
  };

  useEffect(() => {
    if (!id) return;
    getTalhao(id);
  }, [id]);

  if (!data) return <h1>loading...</h1>;

  return (
    <>
      <div className="m-6 flex flex-col gap-6">
        <h1 className="text-xl font-medium text-slate-800">
          Talhão: {data?.talhao.nome}
        </h1>

        <LatestApplication
          setShowCadastro={setShowCadastro}
          application={data?.ultimaColeta}
        />

        <div className="flex flex-col">
          {data?.coletas?.map((application, idx) => {
            return (
              <div
                className={`flex flex-row gap-4 p-2 ${
                  idx % 2 === 0 ? "bg-green-100" : null
                }`}
                key={idx}
              >
                <details className="flex w-full flex-row items-center">
                  <summary className="flex gap-2 p-2">
                    <Image
                      src="/arrow.svg"
                      alt="baixo"
                      width={24}
                      height={24}
                    />

                    <Image src="/event.svg" alt="data" width={24} height={24} />
                    <p>
                      {dayjs(application?.dataInicio).isValid()
                        ? dayjs(application?.dataInicio).format("DD/MM/YYYY")
                        : "--"}
                    </p>
                  </summary>
                  <div className="flex flex-col gap-2">
                    <div className="mt-2 flex flex-row gap-8 ">
                      <p>
                        <span className="mt-3 font-semibold text-slate-500">
                          Fim:
                        </span>{" "}
                        <span className="font-semibold ">
                          {dayjs(application?.dataFim).isValid()
                            ? dayjs(application?.dataFim).format(
                                "DD/MM/YYYY  HH:mm"
                              )
                            : "--"}
                        </span>
                      </p>
                    </div>
                    <div className="flex flex-row justify-between gap-4">
                      <ul className="flex flex-col gap-2">
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
                          <span className="mt-3 font-semibold text-slate-500">
                            Umidade:
                          </span>{" "}
                          <span className="font-semibold">
                            {application?.umidadeRelativa}{" "}
                          </span>
                        </li>
                      </ul>
                      <ul className="flex flex-col gap-2">
                        <li>
                          <span className="mt-3 font-semibold text-slate-500">
                            Vento:
                          </span>{" "}
                          <span className="font-semibold">
                            {application?.velVento}{" "}
                          </span>
                        </li>
                        <li>
                          <span className="mt-3 font-semibold text-slate-500">
                            Chuva:
                          </span>{" "}
                          <span className="font-semibold">
                            {application?.chuva ? "Sim" : "Não"}{" "}
                          </span>
                        </li>
                      </ul>
                    </div>

                    <details className="flex w-full flex-row items-center">
                      <summary className="flex gap-2 p-2">
                        <Image
                          src="/arrow.svg"
                          alt="baixo"
                          width={24}
                          height={24}
                        />
                        <p className="font-semibold text-slate-500">Produtos</p>
                      </summary>
                      <div className="flex flex-col gap-2">
                        {application?.produtos?.map((produto, idx) => {
                          return (
                            <div
                              className={`flex flex-row gap-4 p-2 ${
                                idx % 2 === 0 ? "bg-green-50" : null
                              }`}
                              key={idx}
                            >
                              <p>
                                <span className="mt-3 font-semibold text-slate-500">
                                  Nome:
                                </span>{" "}
                                <span className="font-semibold">
                                  {produto?.nome}{" "}
                                </span>
                              </p>
                              <p>
                                <span className="mt-3 font-semibold text-slate-500">
                                  dosagem:
                                </span>{" "}
                                <span className="font-semibold">
                                  {produto?.dosagem}{" "}
                                </span>
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </details>
                  </div>
                </details>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Index;
