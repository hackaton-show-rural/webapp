import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LatestApplication from "../../../components/LatestApplication";
const Index = () => {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState();
  // chamada para a api
  const getTalhao = async () => {
    const { data } = await axios.get(`http://26.2.137.63:8080/talhao/${id}`);
    setData(data);
  };

  useEffect(() => {
    //getTalhao();
  }, []);

  // if (!data) return <h1>loading...</h1>;

  return (
    <div>
      <h1>Talhão {data?.nome}</h1>

      <LatestApplication application={data?.ultimaAplicacao} />

      <div className="flex flex-col">
        {data?.aplicacoes?.map((application) => {
          return (
            <div className="flex flex-row gap-4 border-y-2 border-slate-600 bg-gray-50  p-4">
              <p className="ml-4">data: {application?.data} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Index;
