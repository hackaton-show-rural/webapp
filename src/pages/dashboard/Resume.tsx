import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
const Resume = () => {
  const [talhao, setTalhao] = useState();
  const [cadastroTalhao, setCadastroTalhao] = useState(false);
  const getTalhao = async () => {
    const { data } = await axios.get(`http://26.2.137.63:8080/talhao/`);
    setTalhao(data);
  };

  useEffect(() => {
    getTalhao();
  }, []);

  if (!talhao) return <h1>loading...</h1>;

  return (
    <div className="m-10 m-10 flex flex-col">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-xl font-medium text-slate-800">
          Talhões cadastrados:
        </h1>
        <button
          className=" align-center border-[rgb(208, 213, 221)] h-[36] w-[36] justify-center rounded-xl border p-[10px]"
          onClick={() => {
            setCadastroTalhao(true);
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
      <div className="flex flex-col">
        {talhao.map((talhao) => {
          return (
            <div className="rounded-lg p-10 shadow ">
              <div className="flex flex-col gap-4">
                <h1>{talhao?.nome}</h1>
                <p>{talhao?.ultimaColeta}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Resume;
