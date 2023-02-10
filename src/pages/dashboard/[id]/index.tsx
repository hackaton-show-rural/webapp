import axios from "axios";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LatestApplication from "../../../components/LatestApplication";
import { useTalhaoContext } from "../../../lib/talhaoContext/useTalhaoContext";
const Index = () => {
  const { setShowCadastro } = useTalhaoContext();

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
              >
                <p className="ml-4">
                  data:{" "}
                  {dayjs(application?.dataInicio).format("DD/MM/YYYY HH:mm")}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Index;
