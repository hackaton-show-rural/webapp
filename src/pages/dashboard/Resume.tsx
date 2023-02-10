import axios from "axios";
import Image from "next/image";
import Link from "next/link";
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
    <div className="m-6 flex flex-col gap-4">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-xl font-medium text-slate-800">
          Talhões cadastrados
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
      <div className="flex flex-col gap-4">
        {talhao?.map((talhao) => {
          console.log(talhao);
          return (
            <Link href={`/dashboard/${talhao.id}`}>
              <div className="flex flex-row gap-4 rounded-lg bg-gray-100 p-6 shadow-lg">
                <div className="flex flex-row items-center justify-center">
                  <div className="flex h-16 w-16 flex-row items-center justify-center rounded-full bg-green-200">
                    <div className="flex h-12 w-12 flex-row items-center justify-center rounded-full bg-green-300">
                      <Image
                        style={{
                          filter:
                            "invert(0.4) sepia(.01) saturate(0) hue-rotate(0deg)",
                        }}
                        src="/talhao.png"
                        alt="talhão"
                        width={36}
                        height={36}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <p className="text-xl font-bold text-slate-900">
                    {talhao?.nome}
                  </p>
                  <p>{talhao?.ultimaColeta}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Resume;
